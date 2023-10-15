
  import { Configuration } from 'webpack';
  import path from 'path';
  import {merge} from 'webpack-merge';
  import WEBPACK_MAIN_CONFIG from './webpack.config.main';
  import HtmlWebPackPlugin from 'html-webpack-plugin';
import {pluginConfig} from './config/plugin';


  const getWebpackConfig = (pluginConfig: any[]) : Configuration  => {
    return {
      mode: 'development',
      /*devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        port: 1000,
        hot: true,
        open: true,
      }, */
      plugins: [
        ...pluginConfig,
        new HtmlWebPackPlugin({
          inject: 'body',
          hash: true,
          title: process.env.X_NAME,
          favicon: path.join(__dirname, '..', '..', '..', 'src/public/icons/favicon.ico'),
          template: path.join(__dirname, '..', '..', '..', 'src/public/index.html'),
          filename: path.join('index.html'),
          minify: false,
        }),
      ],
      output: {
        path: path.resolve(__dirname, '..', '..', '..', 'dist/assets'),
        filename: 'js/main.js',
        assetModuleFilename: 'images/[name][hash][ext][query]',
      },
    };
  };

  const configExport = (env: any, args: any) => {

    const mergedConfig: Configuration = getWebpackConfig(pluginConfig);
    return merge(WEBPACK_MAIN_CONFIG, mergedConfig);
  };

  export default configExport;