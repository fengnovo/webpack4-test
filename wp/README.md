npm init -y
yarn add webpack webpack-cli -D
yarn add postcss-loader autoprefixer
yarn add babel-loader @babel/core @babel/preset-env -D
yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
yarn add @babel/plugin-transform-runtime -D
yarn add @babel/runtime
yarn add @babel/polyfill  // 在需要用到的js，require('@babel/polyfill');
yarn add eslint eslint-loader   //需要下载一个.eslintrc.json
yarn add html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin
yarn add style-loader css-loader less-loader sass-loader node-sass
yarn add expose-loader  // 在需要用到的js，import $ from 'expose-laoder?$!jquery';
yarn add url-loader file-loader html-withimg-loader -D
yarn add clean-webpack-plugin copy-webpack-plugin
yarn add express -D
yarn add webpack-dev-middleware -D
yarn add bootstrap jquery moment

yarn add happypack
yarn add @babel/plugin-syntax-dynamic-import



yarn add loader-utils
yarn add schema-utils
yarn add banner-loader


支持react
yarn add react react-dom
yarn add @babel/preset-react