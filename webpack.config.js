// webpack.confid.js

const path = require("path");

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
	module: {
		rules: [
			{	
				test: /\.css$/i,
				user: ["style-loader", "css-loader"],
			},
		],
	},
}; 
