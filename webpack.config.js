'use strict';

const path = require(`path`);

const publicDir = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.tsx`,
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
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`,
      }
    ],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, `src/app/`),
      '@components': path.resolve(__dirname, `src/components/`),
      '@common': path.resolve(__dirname, `src/common/`),
      '@containers': path.resolve(__dirname, `src/containers/`),
      '@middlewares': path.resolve(__dirname, `src/middlewares/`),
      '@pages': path.resolve(__dirname, `src/pages/`),
      '@services': path.resolve(__dirname, `src/services/`),
      '@store': path.resolve(__dirname, `src/store/`),
    },
    extensions: [`.ts`, `.tsx`, `.js`, `.json`],
  },
};
