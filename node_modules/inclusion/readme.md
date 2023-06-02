# inclusion

> Dynamic imports for all

Using dynamic `import` in legacy compiled-to-JS environments can be problematic. It's often transpiled to `require` by Babel, TypeScript etc. Configurations can be changed to not do this, but that can have other unintended side effects on resulting compiled code.

`inclusion` wraps `import` so that it can be used in these scenarios. It's also fine to use it for other scenarios.

## API

### `inclusion(modulePath) => Promise => exports`

Given an ESM module (`someEsmModule`) like the following:

```js
export default function () { return 'hi' }
export const ABC = 123 
```

We can import and interact with it in a CJS environment (which is what most compile-to-JS libraries still currently do, as used in the wild), like so:

```js
'use strict'
async function doSomething () {
  const { default: someEsmModule, ABC } = await inclusion('some-esm-module')
  console.log(someEsmModule(), ABC) // hi 123
}
```

## Test

```sh
npm test
```

```
Suites:   1 passed, 1 of 1 completed
Asserts:  3 passed, of 3
Time:     456.13ms
----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |      100 |      100 |      100 |                   |
 index.js |      100 |      100 |      100 |      100 |                   |
----------|----------|----------|----------|----------|-------------------|
```

## LICENSE

ISC