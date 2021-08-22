# Volvo E2E tests with WebDriverIO


This is a demonstration project of integration tests. 
These tests are developed in JavaScript with [WebDriverIO V7](http://webdriver.io/) and [Mocha](https://mochajs.org/)

## Features

-   JavaScript
-   Build Docker image by Dockfile
-   Parallel execution by maxInstances in wdio.conf.js
-   Page Object Pattern
-   Test report suporrt Spec,Junit,Allure
-   Kubernetes selenium Grid (just idea)
-   wdio-image-comparison (just idea)

## Framework Structure

-   page.js encapsulate common locators and functions
-   cars.page and home.page inherit from page
-   define test case in specs
-   define dokcerfile
-   define maxInstances and capabilities to run test parallel with different browser
-   define visual-regression (just idea)



## Requirements

-   node >= 14.x.x 
-   npm >= 6.14.x  
-   yarn >= 1.22.x
-   chrome == 84.0.x

## Getting Started

Install the dependencies:

```bash
yarn install or npm install
```

Run e2e tests:

```bash
yarn wdio run ./wdio.conf.js
```
Run docker build:

```bash
docker build -t mydemo -f Dockfile
```

Run docker image:

```bash
docker run -it mydemo
```
## Reports

-   define spec, junit , allure report

## Kubernetes distribute testing (just idea)
To run command by kubectl to depoly hub and nodes and need to adjust hubUrl in test
-   kubectl create -f deploy.yml
-   kubectl describe deploy
-   kubectl create -f service.yml
-   kubectl describe service
-   kubectl create -f repchrome.yml
-   kubectl create -f repff.yml



