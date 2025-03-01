const MiniExtractCssPlugin= require('mini-css-extract-plugin');
const CssMinimizerPlugin=require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		      filename: "[name].bundle.js",
		      path: __dirname +'/dist',
		    },
	module: {
		rules: [
			{
				test: /\.js?$/,
				resolve: {
					fullySpecified: false
				  },
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.svelte$/,
				use: ['svelte-loader']
			},
			{
				test: /\.(css|scss)$/,
				use: [
					MiniExtractCssPlugin.loader,
					"css-loader",
					"sass-loader"
					],
			},
			{
				test: /\.(ttf|webm|mp4|svg|png|jpg)$/i,
				use:{
					loader:'file-loader',
					options:{
						name:'[ext]/[name].[ext]',
						outputPath: "../",
						publicPath: "../"
					}
				},
			}
		],
	},
	resolve: {
		extensions: ['','.js', '.svelte'],
		conditionNames: ["svelte"]
	},
	plugins:[
		new MiniExtractCssPlugin({
			filename: './css/[name].css'
		})
	],
	optimization: {
		minimize: true,
		minimizer: [`...`,new CssMinimizerPlugin()],
		runtimeChunk: 'single',
     	splitChunks: {
       	cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
	}
};
