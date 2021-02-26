/* eslint-env node */
import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default (env: undefined, argv: Configuration): Configuration => ({
  entry: [resolve(__dirname, 'entry.tsx'), 'cirrus-ui'],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `<!DOCTYPE html>
<html id="page">
   <head>
      <title>Getting Started with Cirrus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge;"/>
   </head>
   <body>
      <div id="main"></div>
   </body>
</html>
      `,
    }),
  ],
});
