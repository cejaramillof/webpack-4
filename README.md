## Webpack
Webpack is a module bundler of JS. (Parcel, Browserify, Rollup)

### Install
- `npm install -D -E dependencieName`
- `i / install`
- `dependencieName@version`
- `-D / --save-dev`
- `-S / --save` Not needed since NPM 5
-- `-E / --save-exact`
### Webpack-cli
Needed since webpack4, is a Command line interface (CLI) for use webpack in terminal
- `npm i webpack-cli -D -E`
### Use local version of webpack
- `npx webpack -v` npx exist since npm 5.2

### Build
- `npx webpack`
-- `-w / -watch` listen at change in files to automatic re build
- `npx webpack --entry ./index.js --output ./bundle.js`
Since webpack4 have --mode
-- `--mode production`(without flag this is default)
-- `--mode development`

#### CommonJs
library to import in node `const path = require('path')` in whatever SO
- `__dirname` var with current directory (provided by webpack)

### Webpack config
Per default is `webpack.config.js`
- `webpack --config ./external/webpack.config.js`

### Create script in package.json
- `"build": "webpack"` and run with `npm run build` can send flags with `--` like `npm run build -- --mode production`

### Loaders
Are for read other kind of files not natives in js, like css, etc. in webpack config `module.rules`
- `npm i -D -E css-loader` and configure in webpack.config // this is only for read css
- `npm i -D -E style-loader` and configure in webpack.config // for inject css in js to show in browser
- `npm i -D -E @babel/core @babel/preset-env babel-loader` and configure in webpack.config // to transpile to old versions of ecma
-- @babel/core // core functionality of babel // with @ since babel7
-- @babel/preset-env // version of js to support  // configure in .babelrc
-- babel-loader // to interprete js with babel/core
- `npm i -S -E @babel/runtime` // prod dependencie
- `npm i -D -E @babel/plugin-transform-runtime` // get runtime, to support generators like (aysnc / await) // configure in .babelrc
- `npm i -D -E @babel/preset-react` // to process jsx // configure in .babelrc
Sucrase is alternative for babel because is more faster, but not is recommended to production because this dont transpile the code
- JSON not require loader since webpack4
- `npm i -D -E url-loader` // support to images, fonts and videos will convert in base64 inline to big images not is recommended// configure in webpack.config
- `npm i -D -E file-loader` // support to images, fonts and videos when url loader can't convert he provide url// configure in webpack.config
- `npm i -D -E @babel/plugin-proposal-class-properties` // support to proposal class properties
- `npm i -D- E @babel/plugin-proposal-object-rest-spread`
- `npm i -D -E add-asset-html-webpack-plugin` // to add dynamic dll created // configure in webpack.config - Dynamic Link Library (DLL)

### Plugins
For extend the power of loaders. In webpack config be imported and instancied in `plugins`
- `npm i -D -E mini-css-extract-plugin html-webpack-plugin`
- `npm i -D -E sass-loader stylus-loader less-loader postcss-loader` // support to css preprocessors // configure in webpack.config
- `npm i -D -E stylus less node-sass` // because the loader dont install this (only postcss)
- `npm i -D -E postcss-nested` // required to use postcss and create postcss.config.js

- `npm i -D -E clean-webpack-plugin `// to clear current builds generateds in dist // configure in webpack.config
- `npm i -D -E terser-webpack-plugin` // to compress js (webpack use uglify, this is a fork for uglify more updated) // configure in webpack.config
- `npm i -D -E optimize-css-assets-webpack-plugin` // to mimify css // configure in webpack.config

#### Dynamic Link Library
To create modules repeats, need create another webpack config (dll dependencies) to specificy core dependencies, and import this in webpack.config
- `npm i -D add-asset-html-webpack-plugin` // to import dynamic in html // configure in webpack.config

#### Dynamic imports
- `npm i -D -E @babel/plugin-syntax-dynamic-import` // to support dynamics imports


### Webpack-dev-server
Is a CLI for run webpack with a internal server to stay listen changes in files to automatic reload in browser. 
Can use all same comands of webpack
- `npm i -D -E webpack-dev-server`
- `webpack-dev-server --config ./webpack.config.js`

### HotModuleReplacementPlugin (HMR)
To evit reload all page, only that be changed. Need import webpack in webpack.config, configure plugin. And code to be modular. Need specific config in file (in react, vue and angular is automatic)

### Optimization chunks
To split duplicate code in webpack.config.js

#### React
- `npm i react react-dom`

### More usuals
- webpack
- webpack-cli
- webpack-dev-server
- css-loader
- style-loader
- file-loader
- url-loader
- mini-css-extract-plugin
- html-webpack-plugin
- babel-loader
- @babel/core
- @babel/preset-env
- @babel/preset-react
- add-asset-html-webpack-plugin
- clean-webpack-plugin
- terser-webpack-plugin
- optimize-css-assets-webpack-plugin
- terser-webpack-plugin
- @babel/plugin-syntax-dynamic-import
- @babel/plugin-transform-runtime
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-object-rest-spread
- @babel/runtime

