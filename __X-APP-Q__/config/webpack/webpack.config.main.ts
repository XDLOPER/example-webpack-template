// required importants
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Webpack from 'webpack';

import dotenv from 'dotenv';
import path from 'path';

// CONSTANT
const ENVPATH = path.resolve('__X-APP-Q__','config','dotenv', '.env');

//setup
dotenv.config({path:ENVPATH});

/* eğer react içi kullanmak istiyorsan react ön yükleyici gerekir devDepend olarak kurulu tek yapman gereken '@babel/preset-react' bunu js yerindeki presets arrayine eklemek */ 
const config : Webpack.Configuration = { 
     entry:path.resolve('src/index.js'),
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
                    test: /\.ejs$/,
                    loader: 'ejs-render-loader',
                    exclude: /node_modules/,
                    options: {
                         esModule: false, // esModule seçeneği false olmalıdır
                         variable: 'data', // bir değişken adı belirtin
                    },
               },
               {
                    test: /\.html$/,
                    use: [
                      {
                        loader: 'html-loader',
                      }
                    ]
               },       
               {  
                    test: /\.(s[ac]|c)ss$/i,                
                    include: path.resolve('src/styles/global.scss'),
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
               },
               {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type:'asset/resource',

                  }
          ]
     },
     resolve: {
          extensions: ['.ts', '.js'],
     },
}



export default config