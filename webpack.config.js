/* eslint-disable no-var, strict, prefer-arrow-callback */
'use strict';

var path = require('path');
var StringReplacePlugin = require("string-replace-webpack-plugin");
var foods = require('./src/stores/foods.json');

module.exports = {
  cache: true,
  entry: {
    main: './src/main.tsx',
    vendor: [
      'react/react',
      'react-dom',
      'react-addons-pure-render-mixin',
      'react-mixin',
      'flux',
      'events',
      'babel/polyfill'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [{
      test: /FoodsStore.ts$/,
      loader: StringReplacePlugin.replace({
        replacements: [
          {
            pattern: /\['@foods.json'\]/ig,
            replacement: function(match, p1, offset, string) {
              return JSON.stringify(foods, undefined, '\t');
            }
          }
        ]
      })
    }, {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader!ts-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new StringReplacePlugin()
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
};