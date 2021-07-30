import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		port: 9000
	},
	module: {
		rules: [
			{

			}
		]
	}
}

export default config;