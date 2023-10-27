
  import webpack from 'webpack';
  import path from 'path';
  import {merge} from 'webpack-merge';

  import WEBPACK_MAIN_CONFIG from './webpack.config.main.js';
  import {pluginConfig} from './plugin/plugins.js';




  const getWebpackConfig = (pluginConfig: any /*webpack.Configuration['plugins']*/) : webpack.Configuration  => {
    return {
      watch: true,
      devtool: "source-map",
      mode: 'development',
      plugins: [
        ...pluginConfig,
      ],
      output: {
        path: path.resolve('dist/assets'),
        filename: 'script/main.js',
        assetModuleFilename: 'media/[name][hash][query]',
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