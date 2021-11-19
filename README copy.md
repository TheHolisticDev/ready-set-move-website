# Ready Set Move Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

On top of that several additions have been made to prepare it as a template for a static prerendered website getting hydrated to work as a react app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setup Enhancements

These steps were taken to prepare the app as a template for a staticaly prerenedered web app.

### Flow

Flow (<https://flow.org/>) was added to enabled support for static type checking. Flow let's you decide where type checking shall be used by using the `// @flow` comment at the top of a file.
See [flowconfig](.flowconfig) for configuration.

#### SVG files

To support [importing svg files as components](https://create-react-app.dev/docs/adding-images-fonts-and-files/) a [flow module was created](SVGModule.js.flow) and configured in [flowconfig](.flowconfig)

### Testing

Jest is used as test suite and is set up with coverage.

### Linting

The inbuild linter (eslint) is used with a husky `pre-commit` hook to ensure rapid development.

### Formatting

Prettier is used with the default setting except removin semicolons for automatically formatting.

### Routing

Routing was added using `react-router-dom`. It is prepared at the App base using the `Routing` component. This is the main entry point for top level routing.

Route configurations go into the `routes.js` config file. Each supported language needs a corresponding object with informations about the routes. The object needs to be added to the `routesForLang` object.

The routes object contains one object for each route with the following properties:

- `canonical` – the canonical path, used as meta information to avoid problems due to multiple indexes of the same site by search engines (multiple paths and query params)
- `paths` – if the same page shall be rendered for multiple possible path', an array of strings from the least specific path to the most specific path.

The `canonicalBaseURL` determines the base url of the website.

### i18n

For i18n capabilities `i18next` is used along with `i18next-browser-languagedetector` and `react-i18next`. The `useTranslation` hook is used to provide access to translations and further features.

Translations are found in `src/i18n/translations.json`. They are not namespaced but use semantical representations of each translation instead.

The app is already set up to determine the current language from the path, where `/` yields the default language and `/:lang` specific languages (`/en` for example).
This is also already considered for static rendering (see below).

### UI

`material-ui` is used as a simple styling option adhering to googles material ui concepts (`material.io`). `styled-components` was considered but abandoned due to introducing more complexity and for now the inbuild material-ui JSS styling approach looks simpler. It also has improved in comparison to prior versions concerning features.

### Static rendering

To render the site statically `react-snap` was added. It creates a static representation of the app crawling all link. So make sure to use real links for every site that shall be statically generated.
For example `<Button component={Link}>` will create a button with a link in the background that will be crawled.

The result will be present in the `build` folder and can be statically delivered for example via S3. This has two benefits:

- It creates a representation of the webiste, that is crawlable by search engines.
- The static version can be load fast before hydrating it with the dynamic JS features. This is benefitiol for SEO as well as for the user.

The statically rendered website can be tested locally via `npm run serve`. However be aware, that local http servers have their quirks and this may not reflect the actual result in some points.

### Meta Information

To add meta information to every rendered site, `react-helmet-async` was added. Helmet lets you alter the current documents meta information. This is primarily useful for search engines, but also includes some features while using the app.

The `public/index.html` was already prepared with some useful base meta information. Make sure to adapt them accordingly.

### PWA

Manifest was added and service worker was enabled to support progressive web app features.

### CI

The project is prepared with a `.gitlab-ci.yml` to provide a basic build pipeline running tests etc.

For further information see [the infrastructure Readme](infrastructure/Readme.md)

### VS Code

- Added .jsconfig to support VS Code IDE.
- Added support for aboslute imports. The `src` folder is now the import base and imports can directly used from there. For example in a component use `hooks/useLanguageFromPath` instead of `../hooks/useLanguageFromPath`)
- Added support vor test watching via `.vscode/launch.json`

The following plugins need to be installed manually to add full VS Code support:

- Flow Language Support
  - in addtion search for `javascript.validate.enable` in settings and disable it to get rid of false typescript errors

## Utility Scripts

### `npm run analyze`

Uses `source-map-explorer` to analyse the statically created packages.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
