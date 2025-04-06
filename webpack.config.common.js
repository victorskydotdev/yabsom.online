const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',

	entry: './src/index.js',

	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			chunks: ['main'],
		}),

		new HtmlWebpackPlugin({
			template: './src/html/about.html',
			filename: 'about.html',
			chunks: ['main'],
		}),

		new HtmlWebpackPlugin({
			template: './src/html/contact.html',
			filename: 'contact.html',
			chunks: ['main'],
		}),

		// for the dynamic rendering of the individual faculty members
		new HtmlWebpackPlugin({
			template: './src/html/faculty-member.html',
			filename: 'faculty-member.html',
			chunks: ['main'],
		}),

		// for dynamic rendering of the individual course object(data)
		new HtmlWebpackPlugin({
			template: './src/html/course.html',
			filename: 'course.html',
			chunks: ['main'],
		}),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},

			// as of Webpack v5, we use asset/resource to copy the image to the dist folder. No need to install any extra loaders.
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name]-[hash][ext]',
				},
			},

			{
				test: /\.html$/,
				use: ['html-loader'], // process the HTML files
			},
		],
	},
};
