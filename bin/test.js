const { expect } = require('@japa/expect')
const { apiClient } = require('@japa/api-client')
const { specReporter } = require('@japa/spec-reporter')
const { runFailedTests } = require('@japa/run-failed-tests')
const { processCliArgs, configure, run } = require('@japa/runner')

/*
|--------------------------------------------------------------------------
| Configure tests
|--------------------------------------------------------------------------
|
| The configure method accepts the configuration to configure the Japa
| tests runner.
|
| The first method call "processCliArgs" process the command line arguments
| and turns them into a config object. Using this method is not mandatory.
|
| Please consult japa.dev/runner-config for the config docs.
*/
configure({
  ...processCliArgs(process.argv.slice(2)),
  ...{
    files: ['tests/**/*.spec.js'],
    plugins: [expect(), runFailedTests(), apiClient('http://localhost:3333')],
    reporters: [specReporter()],
    importer: (filePath) => require(filePath),
  },
})

/*
|--------------------------------------------------------------------------
| Run tests
|--------------------------------------------------------------------------
|
| The following "run" method is required to execute all the tests.
|
*/
run()
