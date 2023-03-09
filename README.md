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

- Dev mode: `yarn dev`
- Prod mode: `yarn start`
- Unit testing: `yarn test:unit`
- E2E testing (dev, browser): `yarn test:e2e-browser`
- E2E testing (dev, headless): `yarn test:e2e`
- E2E testing (prod, headless): `yarn test:e2e-prod`

### Architecture

**React Podcaster** is a React application built using a feature-based architecture. This architecture follows the **SOLID** principles, with a directory structure that promotes scalability and maintainability.
This structure allows for clear separation of concerns, making it easier to manage complex applications by breaking them down into smaller, more manageable pieces. In addition, dependency injection principles are applied to provide a flexible and extensible architecture.
Overall, the feature-based architecture of **React Podcaster** promotes clean code, separation of concerns, and maintainability, making it a great choice for building large, complex applications.

### Project Structure

The application is organized into the following directories:

- assets: Contains static assets used in the application, such as images and fonts.
- components: Contains shared components used throughout the application.
- context: Contains context providers used to manage global state.
- features: Contains subdirectories for each feature in the application. Each feature directory contains its own set of components, context, hooks, and services.
- hooks: Contains custom hooks used throughout the application.
- layouts: Contains layout components used to structure pages.
- libs: Contains utility functions and modules used throughout the application.
- pages: Contains top-level pages in the application.
- services: Contains modules for interacting with external services or APIs.
- utils: Contains utility functions used throughout the application.
- App.js: The main application component.
- main.js: The entry point for the application.

### Stack

The technology stack used in **React Podcaster** includes:

- React 18: A popular JavaScript library for building user interfaces.
- Material UI version 5: A React UI framework that provides pre-built components and themes to speed up development.
- Jest: A JavaScript testing framework used for unit testing.
- Cypress: A JavaScript end-to-end testing framework used for UI testing.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
