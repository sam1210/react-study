const path = require('path')
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-2', 'react', 'airbnb'],
          plugins: ['add-module-exports']
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?modules']
      }
    ]
  }
}
