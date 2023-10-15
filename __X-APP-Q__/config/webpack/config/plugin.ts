import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, DefinePlugin } from 'webpack';

export const pluginConfig: Configuration['plugins'] = [
  new MiniCssExtractPlugin({
    filename: 'style/main.[contenthash].css',
  }),
  new DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
];

