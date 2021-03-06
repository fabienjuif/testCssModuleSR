const path = require('path')
const webpack = require('webpack')

const dev = (process.env.NODE_ENV !== 'production')

function getEntrySources(sources) {
  if (dev) {
    sources.push('webpack-dev-server/client?http://localhost:3000')
    sources.push('webpack/hot/only-dev-server')
  }

  return sources
}

function getLoaders(loaders) {
  if (dev) {
    loaders.push('react-hot')
  }
  loaders.push('babel')

  return loaders
}

function getPlugins(plugins) {
  if (dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  return plugins
}

module.exports = {
  devtool: dev ? 'eval' : '',
  entry: {
    test: getEntrySources([
      './app/client',
    ]),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    root: [
      path.resolve('./app/'),
    ],
  },
  plugins: getPlugins([]),
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: getLoaders([]),
      include: path.join(__dirname, 'app'),
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
