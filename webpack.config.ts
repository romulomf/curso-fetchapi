import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

const config: webpack.Configuration = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true
	},
	devServer: {
		compress: false,
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts/,
				enforce: 'pre',
				use: ['source-map-loader', 'ts-loader']
			},
			{
				test: /\.css/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{ loader: 'postcss-loader' }
				]
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: 'fullhash:[fullhash], chunkhash:[chunkhash], name:[name], base:[base], query:[query], file:[file]',
			raw: false
		}),
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new HtmlWebpackPlugin({
			cache: true,
			filename: path.resolve(__dirname, 'dist/[name].html'),
			hash: true,
			meta: {
				charset: 'UTF-8',
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				'Content-Security-Policy': {
					'http-equiv': 'X-UA-Compatible', content: 'IE=edge'
				}
			},
			template: './src/index.html',
			title: 'Curso Fetch API'
		})
	]
}

export default config;