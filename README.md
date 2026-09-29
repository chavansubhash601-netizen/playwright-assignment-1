# EventHub Playwright Assignment

## Playwright vs Playwright Test

The `playwright` package is the core browser automation library. It provides APIs to launch and control Chromium, Firefox, and WebKit browsers.

The `@playwright/test` package is the Playwright test runner. It adds features needed for end-to-end testing such as `test`, `expect`, fixtures like `page`, test isolation, reporting, configuration, retries, and parallel execution.

For this assignment, `@playwright/test` is used because the task requires writing and running automated tests.

## Assignment

The tests validate the EventHub login page:

* EventHub login page opens successfully
* "Sign in to EventHub" heading is visible
* Email field with placeholder `you@email.com` is visible
* Sign In button is visible
* Password field is visible
* URL contains `/login`
* Playwright auto-waiting is used instead of hard-coded sleeps
