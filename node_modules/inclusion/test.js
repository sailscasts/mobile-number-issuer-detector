'use strict'
const { test } = require('tap')
const parentModule = require('parent-module')
const include = require('.')
test('dynamically imports module', async ({ same }) => {
  const mod = await include('parent-module')
  same(mod.default, parentModule)
})

test('dynamically outputs error and exits with 1 on error', async ({ plan, is, match, teardown }) => {
  const { error } = console
  const { exit } = process
  teardown(async () => {
    console.error = error
    process.exit = exit
  })
  plan(2)
  console.error = (err) => {
    match(err.message, 'Cannot find module \'not-a-module\'')
  }
  process.exit = (code) => {
    is(code, 1)
  }
  await include('not-a-module')
})
