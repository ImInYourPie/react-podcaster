## React Podcaster

### Introduction

**React Podcaster** is a web application that allows users to search for and listen to their favorite podcasts. It is built using React 18, Material UI version 5, and uses Jest and Cypress for unit and end-to-end testing.

### Requirements

To run this application, you will need to have Yarn installed on your machine. Yarn is a package manager that is used to install the necessary dependencies. You can install Yarn from the official website: https://yarnpkg.com/

### Notes

Please note that the provided API has a maximum request limit of 20 per minute. Also, some podcasts may have a huge list of episodes, which may cause some requests to take up to 5 minutes or more, influenced by the provided https://api.allorigins.win/get. This means that some e2e tests may timeout.

### Getting Started

To get started, clone this repository and install the dependencies using the following commands:

```
git clone https://github.com/ImInYourPie/react-podcaster.git
cd react-podcaster
yarn
```

### Commands

The following commands are available to run the application:

Dev mode: `yarn dev`
Prod mode: `yarn start`
Unit testing: `yarn test:unit`
E2E testing (dev, browser): `yarn test:e2e-browser`
E2E testing (dev, headless): `yarn test:e2e`
E2E testing (prod, headless): `yarn test:e2e-prod`

### Architecture

React Podcaster follows the **SOLID** principles and uses a directory setup of components, features, pages, hooks, contexts, layouts, lib facades, utils, and dependency injection principles to create a scalable and maintainable application. The components directory contains reusable UI elements, while the features directory contains the business logic for each feature. The pages directory contains the top-level components that define the routes of the application. Hooks, contexts, and layouts directories are used to define shared functionality and provide a consistent user experience. The lib facades directory contains external libraries and APIs used in the application, and the utils directory contains utility functions. Finally, the dependency injection principle is applied to provide a flexible and extensible architecture.

### Stack

The technology stack used in **React Podcaster** includes:

- React 18: A popular JavaScript library for building user interfaces.
- Material UI version 5: A React UI framework that provides pre-built components and themes to speed up development.
- Jest: A JavaScript testing framework used for unit testing.
- Cypress: A JavaScript end-to-end testing framework used for UI testing.
