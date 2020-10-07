const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    bundle: path.join(__dirname, 'public', 'ts', 'index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'js'),
  }
}