## Getting started

- Run API server first
  - Navigate to API folder `cd ../api`
  - Run `yarn` to install dependencies
  - run `yarn start` to start the server, default URL is `http://localhost:8080`
- Run the web app on a separate cli tab
  - Navigate back to webapp directory (e.g. `cd ../web-app`)
  - Run `yarn` to install dependencies
  - run `yarn start` to start the app, browser should open `localhost:3000` automatically

## Commands

- `yarn lint` to run eslint checks
- `yarn test` to run unit tests
- `yarn build` to build the app using default `create-react-app` setup

## Dependencies

- `dayjs` for date manipulation
- `matial-ui` for form elements

## Style

- Only Home page is styled according to the design to showcase the CSS.

## Tests

- `src/utils.test.js` example tests for functions
- `src/pages/Home.test.jsx` example tests for page components
- `src/components/paymentList/ListItem.test.jsx` example tests for common components
