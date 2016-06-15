const path = require('path')

module.exports = {
  entry: {
    index: [
      './app/Component.js',
    ],
  },
  output: {
    path: path.join(__dirname),
    filename: 'index.js',
    publicPath: '/',
    library: 'testcssmodulesr',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js',
    lodash: 'lodash',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, '/app'),
      ],
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    }],
  },
}
