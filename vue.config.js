const path= require('path');
const fs= require('fs');
const CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports = {
    chainWebpack: config => {
      config.plugin('copy')
      .use(CopyWebpackPlugin, [[{
        from:path.resolve(__dirname+'/src/lib/'),
        to:path.resolve(__dirname+'/dist/lib/'),
        toType: 'dir',
        ignore:['.*']
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

        // fs.writeFile('confit.txt',config, (err) => {
        //   if (err) throw err;
        //   console.log('The file has been saved!');
        // });
    }
    
  };