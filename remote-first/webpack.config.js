const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //       options: {
      //         insert: require.resolve('./styleLoader.js'),
      //       },
      //     },
      //     'css-loader',
      //   ],
      // },
      {
        test: /\.css$/, // Aplica essas regras para arquivos que terminam em .css
        use: [
          'style-loader', // Insere o CSS em tags <style> no HTML
          'css-loader',   // Lê o CSS e resolve @import e url()
        ],
      },
    ],
  },
  devServer: {
    port: 9001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'MFEComponents',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './App': './src/bootstrap',
        './Button': './src/Button',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
      },
    }),
  ],
};
