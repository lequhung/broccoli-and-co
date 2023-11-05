# broccoli-and-co

Invitation Form

## Technologies

- React 18
- React Hook Form
- EmotionJS 11
- Typescript 5
- Context API
- Webpack 5
- Eslint
- Prettier
- Cypress 12
- Jest
- React Testing Library
- NodeJS 18

## Usage

- Installation (Gotta force the installation to ignore warnings)

  ```sh
  npm i --force
  ```

- Start application (running on http://localhost:3000)

  ```sh
  npm start
  ```

- Run unit test

  ```sh
  npm run test:unit
  ```

- Run unit test with watch on

  ```sh
  npm run test:unit-watch
  ```

- Run unit test with watch on and showing coverage

  ```sh
  npm run test:unit-watch-coverage
  ```

- Run functional test with headless chrome

  ```sh
  npm run test:functional
  ```

- Run functional test with Cypress dashboard and Chrome opening

  ```sh
  npm run test:functional-open
  ```

- Run all unit tests and functional tests

  ```sh
  npm run test
  ```

- Open coverage report

  ```sh
  npm run coverage
  ```

- Run lint

  ```sh
  npm run lint
  ```

- Run prettier

  ```sh
  npm run prettier
  ```

- Build application/artifact for Production

  ```sh
  npm run build
  ```

- Create bundle/package analyzer .json file

  ```sh
  npm run bundle-analyzer
  ```

- Open bundle/package analyzer .json file

  ```sh
  npm run bundle-analyzer-open
  ```

## Notes

- The implementation of components are kept simple due to time limit
- Tests are written for important components/logic due to time limit

## Known Issues

- Webpack 5 does not clean `/build` folder and if `/build` folder is not removed, error will occur when starting up `devServer`
