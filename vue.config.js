const path = require('path')

module.exports = {
	assetsDir: 'static',

	configureWebpack: {
		devtool: 'source-map'
	},

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				'/home/geovane/workspace/aipo/src/scss/custom.scss'
			]
		},
		'resolve-alias': {
			alias: {
				//src: path.resolve(__dirname, './src'),
				services: path.resolve(__dirname, './src/api/services'),
				icons: path.resolve('/home/geovane/workspace/aipo/node_modules/vue-material-design-icons')
			}
		}
	},

	productionSourceMap: false
}


