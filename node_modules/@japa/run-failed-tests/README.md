# @japa/run-failed-tests
> Japa plugin to run only failed tests

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

The `@japa/run-failed-tests` plugin runs only the failed tests on subsequent runs.

Here's how it works under the hood.

- You ran the tests suite, and a couple of tests failed.
- On the next run, only the failed test will run.
- If all tests are green, the next run will execute all the tests.

```sh
npm i @japa/run-failed-tests 
```

```ts
import { runFailedTests } from '@japa/run-failed-tests'

configure({
  plugins: [runFailedTests()]
})
```

[github-actions-image]: https://img.shields.io/github/actions/workflow/status/japa/run-failed-tests/test.yml?style=for-the-badge
[github-actions-url]: https://github.com/japa/run-failed-tests/actions/workflows/test.yml "github-actions"

[npm-image]: https://img.shields.io/npm/v/@japa/run-failed-tests.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@japa/run-failed-tests "npm"

[license-image]: https://img.shields.io/npm/l/@japa/run-failed-tests?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
