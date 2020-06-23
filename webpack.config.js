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
    historyApiFallback: true,
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
      '@app': path.resolve(__dirname, `src/app/`),
      '@components': path.resolve(__dirname, `src/components/`),
      '@types': path.resolve(__dirname, `src/types/`),
      '@mocks': path.resolve(__dirname, `src/mocks/`),
    },
    extensions: [`.js`, `.jsx`],
  },
};
