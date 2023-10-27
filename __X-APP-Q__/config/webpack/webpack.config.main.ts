// required importants
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Webpack from 'webpack';
import dotenv from 'dotenv';

// CONSTANT
import { __ENV_PATH__,__INPUT_PATH__,__STYLE_PATH__ } from './constants/index.js'

// environment variables setup 
dotenv.config({path:__ENV_PATH__});

/* eğer react içi kullanmak istiyorsan react ön yükleyici gerekir devDepend olarak kurulu tek yapman gereken '@babel/preset-react' bunu js yerindeki presets arrayine eklemek */ 
const config : Webpack.Configuration = { 
     entry:__INPUT_PATH__,
     module:{
          rules:[
               {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
               },
               {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                         presets: ['@babel/preset-env']
                       }
                    }
               },
               {
                    test: /\.(hbs|handlebars)$/,
                    use: [
                      {
                        loader: 'handlebars-loader',
                        options: {
                          runtime: 'handlebars',
                        },
                      },
                    ],
               },
               {
                    test: /\.ejs$/,
                    use:[
                         //{loader:'ejs-webpack-loader'},
                         {loader:'ejs-compiled-loader'},
                         //{loader:'ejs-plain-loader'},
                         /*{
                              loader:'ejs-loader',
                              options: {
                                   esModule: false,
                              },
                         }*/

                    ],
                    exclude: /node_modules/,
               },
               {
                    test: /\.html$/,
                    use: [
                      {
                        loader: 'html-loader',
                      },
                    ]
               },       
               {  
                    test: /\.(s[ac]|c)ss$/i,                
                    include: __STYLE_PATH__,
                    exclude: /node_modules/,
                    use: [
                    {                    
                         loader: MiniCssExtractPlugin.loader,                                                 
                    },
                    
                    "css-loader",                  
                    "postcss-loader",                                                 
                    "sass-loader",                                  
                    ],           
               },
               {
                    test: /\.geojson$/,
                    type: 'json',
               }
          ]
     },
     /* resolve etkinliği tam kapsamlı çalışmıyor düzeltilecek
     
     resolve: {
          extensions: ['.ts', '.js'],
     },

     */
}


export default config