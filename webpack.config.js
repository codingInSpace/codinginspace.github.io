const webpack = require('webpack');
const prod = process.env.NODE_ENV == 'production';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: prod ? '' : 'cheap-module-source-map',
	entry: [
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
    path: './build/',
    filename: 'bundle.js'
  },
	plugins: prod ? [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	] : [
		new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: [ 'es2015', 'stage-0', 'react' ] }
			},
			{
				test: /(\.scss|\.css)$/,
				loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]___[hash:base64:5]!sass-loader?sourceMap!toolbox-loader'
			},
			{
				test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
				loader: 'imports?define=>false&this=>window'
			}
		]
  },
	toolbox: {theme: 'src/stylesheets/theme.scss'}
};
