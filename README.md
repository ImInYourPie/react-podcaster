# React Podcaster

## Requirements

```
yarn
```

## Notes

The provided API as a maximum request limit of 20 per minute;
Due to some podcasts having a huge list of episodes, some requests may take up to 5 minutes (or more, depends on the provided `https://api.allorigins.win/get`).

## Getting started

To get started, clone this repository and install the dependencies:

```
git clone https://github.com/ImInYourPie/react-podcaster.git
cd react-podcaster
yarn
```

### Commands

- Dev mode: `yarn dev`
- Prod mode: `yarn start`
- Unit testing: `yarn test:unit`
- e2e testing (dev, browser): `yarn test:e2e-browser`
- e2e testing (dev, headless): `yarn test:e2e`
- e2e testing (prod, headless): `yarn test:e2e-prod`
