const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [new CleanWebpackPlugin()],

	// optimization: {
	// 	runtimeChunk: 'single',
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	},
	// },
});
