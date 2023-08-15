# 03 Exercise - Mock Service Worker (MSW)

Practise working with the [Mock Service Worker (MSW)](https://mswjs.io/) library.

## Brief

Your team has just implemented a Todo application. Your tech lead has asked you to start preparing for testing the React app by [mocking the REST API](https://mswjs.io/docs/getting-started/mocks/rest-api). Once this is done, you'll be ready to write a couple of tests.

## Getting Started

To run the React app tests:

```zsh
cd client
npm install
npm test
```

## Instructions

### Mock Responses

The MSW library has already been installed and some of the required setup has been done:

- `client/src/setupTests.js` enables mocking for unit tests via beforeAll/afterAll hooks.
- `client/src/mocks/server.js` sets up the "server" to use the same mocking logic in Node.

Your task is to to specify the two needed mocked responses:

- `client/src/mocks/handlers.js` describes request handlers to use.

**Acceptance Criteria:**

- [ ] Mock responses have been defined in `client/src/mocks/handlers.js` for the two API calls.

### Tests

Now it's time to add the needed tests. Follow the TODO comments in `client/src/App.test.js` and implement the tests.

**Acceptance Criteria:**

- [ ] The tests in `client/src/App.test.js` have been implemented.
- [ ] The tests pass.

### Submit the Exercise

**Acceptance Criteria:**

- [ ] The exercise has been submitted in Google Classroom.
