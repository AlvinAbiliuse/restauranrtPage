// webpack.confid.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
	},
	plugins: {
		new htmlWebpackPlugin({
			template: "./srctemplate.html".
		}).
	},
	module: {
		rules: [
			{	
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				use: ["Ht
		],
	},
}; 
