'use strict';

const path = require(`path`);

const publicDir = path.resolve(__dirname, `public`);

module.exports = {
  entry: `./src/index.jsx`,
  output: {
    filename: `bundle.js`,
    path: publicDir,
  },
  devtool: `source-map`,
  devServer: {
    contentBase: publicDir,
    open: true,
    inline: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      }
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, `src/components/`),
      '@models': path.resolve(__dirname, `src/models/`),
    },
    extensions: [`.js`, `.jsx`],
  },
};
