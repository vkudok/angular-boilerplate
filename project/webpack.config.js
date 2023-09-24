const MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ title: "Test App" }),
    ],
    mode: "production",
    devtool: "nosources-source-map",
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.png/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 10kb
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};