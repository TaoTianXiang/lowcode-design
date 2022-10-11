const { join, resolve } = require('path');
const fs = require('fs-extra');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { version } = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.resolve.plugin('tsconfigpaths').use(TsconfigPathsPlugin, [
      {
        configFile: './tsconfig.json',
      },
    ]);
    config.merge({
      node: {
        fs: 'empty',
      },
      entry: {
        editor: require.resolve('./src/editors/main.ts'),
        simulator: require.resolve('./src/preview/simulator.ts'),
      },
      // output: {
      //   path: join(__dirname, '/build/test'),
      // },
    });
    config.plugin('copyStatic').use(CopyWebpackPlugin, [
      [
        {
          from: resolve(__dirname, './static'),
          to: resolve(__dirname, './build/static'),
          ignore: ['.*'],
        },
      ],
    ]);
    config.plugin('index').use(HtmlWebpackPlugin, [
      {
        inject: false,
        minify: false,
        templateParameters: {
          scenario: 'editor',
          version,
        },
        template: require.resolve('./public/index.ejs'),
        filename: 'index.html',
      },
    ]);
    config.plugin('preview').use(HtmlWebpackPlugin, [
      {
        inject: false,
        minify: false,
        templateParameters: {
          render: 'preview',
        },
        template: require.resolve('./public/preview.ejs'),
        filename: 'preview.html',
      },
    ]);
    config.plugins.delete('hot');
    config.devServer.hot(false);
    config.resolve.merge({
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    });
    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
  });
};
