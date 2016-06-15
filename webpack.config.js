var webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
    path: './build/',
    filename: 'bundle.js'
  },
	plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: [ 'es2015', 'react' ] }
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
				loader: 'imports?define=>false&this=>window'
			}
		]
  }
};
