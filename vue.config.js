const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const vConsole = require('vconsole-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  productionSourceMap: false,

  configureWebpack: (config) => {
    let result = {
      optimization: {
        minimizer: [new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
          },
        })]
      }
    }
    if (process.env.VUE_APP_CONFIG === 'production') {
      result.plugins=[
        new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.json$|\.css/,
        threshold:0, // 只有大小大于该值的资源会被处理
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets:false // 删除原文件
        })
      ];
    }
    return result;
  },
  chainWebpack: config => {
    config.plugin('copy')
      .use(CopyWebpackPlugin, [[{
        from: path.resolve(__dirname + '/src/lib/'),
        to: path.resolve(__dirname + '/dist/lib/'),
        toType: 'dir',
        ignore: ['.*']
      }]])
    config.module
      .rule('eslint')
      .test(/\.js$/)
      .exclude
      .add(path.resolve('./src/lib'));
    config.module.rule('compile')
      .test(/\.js$/)
      .exclude
      .add(path.resolve('./src/lib'));
    //修正svg字体被放入img
    config.module.rule('svg')
      .test(/\.svg$/)
      .include
      .add(path.resolve('./src/assets/fonts'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'fonts/[name].[hash:8].[ext]'
      })
    //图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
      });
    // 测试环境加载vconsole
    if (process.env.VUE_APP_CONFIG === 'RD') {
      config.plugin('vconsole').use(vConsole, [{
        filter: [],
        enable: true,
      }]);
    }
  }
};