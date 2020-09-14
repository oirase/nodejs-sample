const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve('src/main.ts'),
  output: {
    path: path.resolve('public'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader'
        ]
      }
    ]
  }
}
