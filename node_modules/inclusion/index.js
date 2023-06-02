'use strict'
const parentModule = require('parent-module')
const { createRequire } = require('module')
module.exports = async (req) => {
  const { resolve } = createRequire(parentModule())
  try {
    const mod = await import(resolve(req))
    return mod
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
