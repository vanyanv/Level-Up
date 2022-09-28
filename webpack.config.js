const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//everything to be exported
module.exports = {
  //entry point where our application beings
  entry: './src/index.js',
  //bundler, turning everything into one file called bundle.js and put it into a folder called dist
  output: {
    //output location
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  //these are our plugins
  plugins: [
    new HTMLWebpackPlugin({
      //tells the webpack to inject all the bundled files into index.html
      template: './src/index.html',
    }),
  ],
  devServer: {
    proxy: {
      api: 'http://localhost:3000',
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        //handling react code with JS and JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        //creates style tag, loads css files, converts sass files
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
