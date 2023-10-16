
  import webpack from 'webpack';
  import path from 'path';
  import {merge} from 'webpack-merge';
  import WEBPACK_MAIN_CONFIG from './webpack.config.main.js';
  import HtmlWebPackPlugin from 'html-webpack-plugin';
  import {pluginConfig} from './config/plugin.js';


  const getWebpackConfig = (pluginConfig: any /*webpack.Configuration['plugins']*/) : webpack.Configuration  => {
    return {
      watch: true,
      mode: 'development',
      plugins: [
        ...pluginConfig,
        new HtmlWebPackPlugin({
          inject: 'body',
          hash: true,
          title: process.env.X_NAME,
          favicon: path.resolve('src/public/icons/favicon.ico'),
          template: path.resolve('src/public/index.html'),
          filename: path.join('index.html'),
          minify: false,
        }),
      ],
      output: {
        path: path.resolve('dist/assets'),
        filename: 'script/main.js',
        assetModuleFilename: 'images/[name][hash][query]',
      },
      /*
      devServer: {
        static: {
          directory: path.join('public'),
        },
        port: 1000,
        hot: true,
        open: true,
      },
      */
    };
  };


  export default (env: any, args: any)=>{
    const mergedConfig: webpack.Configuration = getWebpackConfig(pluginConfig);
    return merge(WEBPACK_MAIN_CONFIG, mergedConfig);
  };