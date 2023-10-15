import { Configuration } from 'webpack';
import {merge} from 'webpack-merge';
import {pluginConfig} from './config/plugin';

import path from 'path';
import WEBPACK_MAIN_CONFIG from './webpack.config.main';
import HtmlWebPackPlugin from 'html-webpack-plugin';


const getWebpackConfig = (pluginConfig : any[]) : Configuration => {
     return {
          mode: 'production',
          plugins:[
               ...pluginConfig,
               new HtmlWebPackPlugin({
                    inject: 'body',
                    hash: true,
                    title:process.env.X_NAME,
                    favicon: path.join(__dirname,'..','..','..','src/public/icons/favicon.ico'),
                    template: path.join(__dirname,'..','..','..','src/public/index.html'),  
                    filename: path.join('..','public','index.html'),
                    minify: false
               })
          ],
          output:{
               path:path.resolve(__dirname,'..','..','..','dist/assets'),
               filename: 'js/main.[hash].js',
               assetModuleFilename:'images/[name][hash][ext][query]'
          }
     }
}

const configExport = (env: any, args: any) => {
     const mergedConfig = getWebpackConfig(pluginConfig);
     return merge(WEBPACK_MAIN_CONFIG,mergedConfig);
};

export default configExport;