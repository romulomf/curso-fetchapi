import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

const config: webpack.Configuration = {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: './src/index.ts',
	output: {
		assetModuleFilename: '[contenthash][ext]',
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js?[hash]',
		clean: true
	},
	devServer: {
		client: {
			logging: 'error',
		},
		static: {
			directory: path.resolve(__dirname, 'dist'),
			serveIndex: true,
		},
		// indica qual é a página que deve ser aberta ao iniciar
		open: 'main.html',
		compress: false,
		liveReload: true,
		hot: true,
		port: 9000,
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/i,
				enforce: 'pre',
				use: ['source-map-loader', 'ts-loader']
			},
			{
				test: /\.css/i,
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
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/i,
				type: 'asset/resource',
				generator: {
					filename: '[name][ext]?[contenthash]'
				}
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
			},
			template: './src/index.html',
			title: 'Curso Fetch API'
		}),
		new HtmlWebpackPlugin({
			cache: true,
			filename: path.resolve(__dirname, 'dist/form.html'),
			hash: true,
			meta: {
				charset: 'UTF-8',
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
			},
			template: 'src/pages/client-form.html',
			title: 'Petshop | Formulário de Clientes',
		})
	]
}

export default config;