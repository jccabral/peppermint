module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /s[ca]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}