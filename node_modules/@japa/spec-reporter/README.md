# @japa/spec-reporter
> Spec reporter for Japa tests runner

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

Spec reporter displays a detailed output for the executed tests.

![](assets/spec-reporter-output.png)

## Installation
Install the package from the npm registry as follows.

```sh
npm i -D @japa/spec-reporter

# yarn
yarn add -D @japa/spec-reporter
```

## Usage
You can use the spec reporter with the `@japa/runner` as follows.

```ts
import { configure } from '@japa/runner'
import { specReporter } from '@japa/spec-reporter'

configure({
  reporters: [specReporter()]
})
```

[github-actions-image]: https://img.shields.io/github/actions/workflow/status/japa/spec-reporter/test.yml?style=for-the-badge

[github-actions-url]: https://github.com/japa/spec-reporter/actions/workflows/test.yml "github-actions"

[npm-image]: https://img.shields.io/npm/v/@japa/spec-reporter.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@japa/spec-reporter "npm"

[license-image]: https://img.shields.io/npm/l/@japa/spec-reporter?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
