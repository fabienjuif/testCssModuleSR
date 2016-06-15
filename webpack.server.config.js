const path = require('path')

module.exports = {
  entry: {
    index: [
      './app/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
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
  resolve: {
    root: [
      path.resolve('./app/'),
    ],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, '/app'),
      ],
    }, {
      test: /\.s?css$/, // CSS should begins with '.' (./or../)
      loaders: [
        'style',
        'css?modules&localIdentName=[path]_[local]__[hash:base64:5]',
        'sass',
      ],
    }],
  },
}
