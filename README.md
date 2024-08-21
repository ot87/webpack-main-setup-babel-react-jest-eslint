# Webpack Main Setup

Webpack configuration for application development with `React`, `Jest`, and `ESLint`.

Configuration includes:
- Babel
- PostCSS
- React
- React Testing Library
- Jest
- ESLint
- Prettier

Package-specific configurations are extracted to the separate config files for as many items as possible into a dedicated `config` directory.

### Scripts

```
"start": "webpack serve --config config/webpack.config.js --node-env=development",
"build": "webpack --config config/webpack.config.js --node-env=production",
"test": "jest --coverage --watchAll"
```

### Webpack

The setup is divided into files for *`common`*, *`dev`* and *`prod`* configurations, is placed into the `config` directory, and is merged into one config file depending on the `node_env` value passed to `webpack`.

##### Common:

`babel`, `css`, `postcss` loaders, default images handling as `asset`, and `@svgr/webpack` loader for importing `svg` files as React components.

Aliases support is provided.

`HtmlWebpackPlugin` for generating `index.html` from a provided template, `CopyWebpackPlugin` for copying favicon-related images and files from the `public` directory, and `ESLintPlugin`.

Paths to the `babel`, `postcss`, and `eslint` config files are individually specified for each loader/plugin.

##### Development:

`style-loader` for injecting CSS into the DOM, `DotenvWebpackPlugin` for development-specific environment variables from `.env.development` file, `ReactRefreshWebpackPlugin` for fast refresh, `Webpack DevServer`, and devtool `eval-source-map`.

##### Production:

Caching of files, chunks, and assets by names hashing, `MiniCssExtractPlugin` for CSS loading, `CssMinimizerPlugin` for minification, runtime chunks generation and vendors-grouped chunk splitting, `DotenvWebpackPlugin` for production-specific environment variables from `.env.production` file, and devtool `source-map`. 

#### Plugins

The next plugins are used:
- HtmlWebpackPlugin
- CopyWebpackPlugin
- DotenvWebpackPlugin
- MiniCssExtractPlugin
- CssMinimizerPlugin
- ESLintPlugin
- ReactRefreshWebpackPlugin

### Babel

Presets `@babel/preset-env`, `@babel/preset-react` with `runtime: automatic` option, and `react-refresh/babel` plugin.

Environment-specific key `env` is applied to enable `development` option for `@babel/preset-react` preset and `react-refresh/babel` plugin in the development mode.

### PostCSS

`postcss-preset-env` and `postcss-normalize` presets.

### Jest

Code coverage for `js` and `jsx` files in the `src` directory (except `src/index.js`), `testMatch` for `.test.js` and `.test.jsx` files in the `src` directory.

`jest-watch-typeahead` for running tests by file or test name, `jest-runner-eslint`, `babel-jest` for code transformation.

Aliases support is provided.

Path to the `babel` config file is specified explicitly.

Paths to the `jest` and `jest-runner-eslint` config files are specified in the `package.json`.

### ESLint / Prettier

Flat ESLint config is used.

The next ESLint configurations are enabled:
- ESLint recommended
- React recommended
- React jsx-runtime
- React hooks
- JSX a11y
- Jest recommended
- Jest style
- React Testing Library
- Jest-DOM recommended
- Prettier recommended

### Misc

`jsconfig.js`, which enables `VSCode` autocompletion with aliases, is left in the root directory as `VSCode` can use it from the root directory only.

`PropTypes` support is provided.
