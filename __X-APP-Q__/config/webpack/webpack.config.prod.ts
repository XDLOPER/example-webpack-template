import webpack from 'webpack';
import {merge} from 'webpack-merge';
import {pluginConfig} from './config/plugin.js';

import path from 'path';
import WEBPACK_MAIN_CONFIG from './webpack.config.main.js';
import HtmlWebPackPlugin from 'html-webpack-plugin';


// plugin config nedense tip uyuşmazlığı tespit ediyor çözmek gerek 
const getWebpackConfig = (pluginConfig : any /*webpack.Configuration['plugins']*/) : webpack.Configuration => {
     return {
          watch: true,
          mode: 'production',
          plugins:[
               ...pluginConfig,
               new HtmlWebPackPlugin({
                    inject: 'body',
                    hash: true,
                    title:process.env.X_NAME,
                    favicon: path.join('src/public/icons/favicon.ico'),
                    template: path.join('src/public/index.html'),  
                    filename: path.join('..','public','index.html'),
                    minify: false
               })
          ],
          output:{
               path:path.resolve('dist/assets'),
               filename: 'js/main.[hash].js',
               assetModuleFilename:'images/[name][hash][ext][query]'
          }
     }
}

export default (env: any, args: any)=>{
     const mergedConfig = getWebpackConfig(pluginConfig);
     return merge(WEBPACK_MAIN_CONFIG,mergedConfig);
};