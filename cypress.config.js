import { defineConfig } from 'cypress';

const codeCoverageTask = require('@cypress/code-coverage/task');

export default defineConfig({
  chromeWebSecurity: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress-report.[hash].xml',
    toConsole: false
  },
  defaultCommandTimeout: 60000,
  taskTimeout: 150000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/functional/**/*.spec.{js,ts}'
  }
});
