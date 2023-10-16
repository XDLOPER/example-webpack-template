import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const pluginConfig: webpack.Configuration['plugins'] = [
  new MiniCssExtractPlugin({
    filename: 'style/main.[contenthash].css',
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
];

