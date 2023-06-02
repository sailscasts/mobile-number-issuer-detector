# @japa/assert
> Assertion library built on top of Chai.assert

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

An assertion library built on top of [Chai.assert](https://www.chaijs.com/guide/styles/#assert) with small tweaks and additional features like assertion planning.

#### [Complete API documentation](https://japa.dev/docs/plugins/assert)

## Installation
Install the package from the npm registry as follows:

```sh
npm i @japa/assert

yarn add @japa/assert
```

## Usage
You can use the assertion package with the `@japa/runner` as follows.

```ts
import { assert } from '@japa/assert'
import { configure } from '@japa/runner'

configure({
  plugins: [assert()]
})
```

Once done, you will be able to access the `assert` property on the test context.

```ts
test('test title', ({ assert }) => {
  assert.deepEqual({ id: 1 }, { id: 1})
})
```

## Register open API schemas
You can register open API schema and then assert HTTP responses against.

```ts
configure({
  plugins: [assert({
    openApi: {
      schemas: [join(__dirname, '..', 'api-spec.json')]
    }
  })]
})
```

Validate response as follows.

```ts
test('get users', ({ assert }) => {
  const response = await supertest(baseUrl).get('/users')
  assert.isValidApiResponse(response)
})
```

[github-actions-url]: https://github.com/japa/assert/actions/workflows/test.yml
[github-actions-image]: https://img.shields.io/github/actions/workflow/status/japa/assert/test.yml?style=for-the-badge "github-actions"

[npm-image]: https://img.shields.io/npm/v/@japa/assert.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@japa/assert "npm"

[license-image]: https://img.shields.io/npm/l/@japa/assert?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
