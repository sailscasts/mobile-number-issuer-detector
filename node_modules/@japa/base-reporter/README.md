Japa Base Reporter

> Base reporter to create customized testing reporters for Japa

The Base reporter abstracts the repetitive parts of creating a tests reporters.

[![github-actions-image]][github-actions-url] [![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

## Setup

Install the package from npm registry as follows:

```sh
npm i @japa/base-reporter

# Yarn lovers
yarn add @japa/base-reporter
```

```ts
import { BaseReporter } from '@japa/base-reporter'

class MyReporter extends BaseReporter {}

export const reporterFn = (myReporterOptions = {}) => {
  const myReporter = new MyReporter(myReporterOptions)
  return myReporter.boot.bind(reporter)
}
```

## Handlers

The Base reporter invokes following methods as it receives the events from the runner. You can implement these methods to display the tests progress.

```ts
import type {
  TestEndNode,
  SuiteEndNode,
  GroupEndNode,
  TestStartNode,
  RunnerEndNode,
  GroupStartNode,
  SuiteStartNode,
  RunnerStartNode,
} from '@japa/core'

class SpecReporter extends BaseReporter {
  protected onTestStart(payload: TestStartNode) {
    console.log('test started')
  }
  protected onTestEnd(payload: TestEndNode) {
    console.log('test endeded')
  }

  protected onGroupStart(payload: GroupStartNode) {
    console.log('group started')
  }
  protected onGroupEnd(payload: GroupEndNode) {
    console.log('group ended')
  }

  protected onSuiteStart(payload: SuiteStartNode) {
    console.log('suite started')
  }
  protected onSuiteEnd(payload: SuiteEndNode) {
    console.log('suite ended')
  }

  protected async start(payload: RunnerStartNode) {
    console.log('test runner started. You can run async operations here')
  }
  protected async end(payload: RunnerEndNode) {
    console.log('test runner ended. You can run async operations here')
  }
}
```

## Inherited properties

The following properties are available on the BaseReporter. These properties are available only after the boot method is called.

### runner

Reference to underlying tests runner instance.

```ts
this.runner
```

### currentFileName

Reference to the file name for which tests are getting executed. The filename is only available inside the test or group handlers.

```ts
this.currentFileName
```

### currentSuiteName

Reference to the suite name for which tests are getting executed. The suite name is only available after the `onSuiteStart` handler call.

```ts
this.currentSuiteName
```

### uncaughtExceptions

Uncaught exceptions collected while tests are running. We rely on `process.on('uncaughtException')` event to collect uncaught exceptions and display them with their stack trace at the end.

## Printing tests summary

After all the tests have been finished, you can call the `printSummary` method to print a detailed summary of all tests alongside pretty diffs and pretty error stack trace.

You should call the `printSummary` method from the `end` handler.

```ts
class SpecReporter extends BaseReporter {
  protected async end() {
    const summary = await this.runner.getSummary()
    await this.printSummary(summary)
  }
}
```

[github-actions-image]: https://img.shields.io/github/actions/workflow/status/japa/base-reporter/test.yml?style=for-the-badge
[github-actions-url]: https://github.com/japa/base-reporter/actions/workflows/test.yml 'github-actions'
[npm-image]: https://img.shields.io/npm/v/@japa/base-reporter.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@japa/base-reporter 'npm'
[license-image]: https://img.shields.io/npm/l/@japa/base-reporter?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md 'license'
[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]: "typescript"
