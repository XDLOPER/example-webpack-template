import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';


import webFileFindEngine,{changeExtensions} from './webpack-html-web-plugin.js';


// CONSTANTS
import {__WEB_FILE_PATH__} from '../constants/index.js'
const HtmlWebPackPluginArray = []


webFileFindEngine(__WEB_FILE_PATH__).forEach((webFilePath)=>{

  const htmlWebPackPlugin = new HtmlWebPackPlugin({
    inject: 'body',
    hash: true,
    title: process.env.X_NAME,
    favicon:webFilePath.includes('index') === true ? path.resolve(__WEB_FILE_PATH__,'icons/favicon.ico') : null,
    template:path.resolve(__WEB_FILE_PATH__,webFilePath),
    filename: path.join(changeExtensions(webFilePath)),
    minify: false,
    excludeChunks:webFilePath.includes('index') === true ? [] : ['main']
  })

  HtmlWebPackPluginArray.push(htmlWebPackPlugin)
})

export const pluginConfig: webpack.Configuration['plugins'] = [

  // for before file delete 
  new CleanWebpackPlugin(),

  // for css file extract
  new MiniCssExtractPlugin({
    filename: 'style/main.[contenthash].css',
  }),

  // for webpack global varibles 
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),

  // for webpack import alias
  new webpack.ProvidePlugin({
    'x':'jquery',
    $:'jquery',
  }),
  
  ...HtmlWebPackPluginArray
];

