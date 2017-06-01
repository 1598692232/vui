var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, '/', dir)
}

var rules =  [
	{
		test: /\.(js|vue)$/,
		loader: 'eslint-loader',
		enforce: 'pre',
		include: [resolve('src'), resolve('demo')],
		options: {
			formatter: require('eslint-friendly-formatter')
		}
	},
	{
		test: /\.(vue|less)$/,
		loader: 'vue-loader',
		options: {
			loaders: {}
		}
	},
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	},
	{
		test: /\.(css|less)/,
		use: [ 'style-loader', 'css-loader','less-loader' ]
	},
	{
		test: /\.(png|jpg|gif|svg)$/,
		loader: 'file-loader',
		options: {
			name: '[name].[ext]?[hash]'
		}
	}
]

var rules2 =  [
	{
		test: /\.(js|vue)$/,
		loader: 'eslint-loader',
		enforce: 'pre',
		include: [resolve('src'), resolve('demo')],
		options: {
			formatter: require('eslint-friendly-formatter')
		}
	},
	{
		test: /\.(vue|less)$/,
		loader: 'vue-loader',
		options: {
			loaders: {
				css: ExtractTextPlugin.extract({
					loader: 'css-loader',
					fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
				})
			}
		}
	},
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	},
	{
		test: /\.(css|less)/,
		use: [ 'style-loader', 'css-loader','less-loader' ]
	},
	{
		test: /\.(png|jpg|gif|svg)$/,
		loader: 'file-loader',
		options: {
			name: '[name].[ext]?[hash]'
		}
	}
]


module.exports = {
  entry: './demo/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules:rules
  },
	plugins: [
		new webpack.LoaderOptionsPlugin({
			vue: {
				// 使用用户自定义插件
				postcss: [require('postcss-cssnext')()]
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'index.tpl.html',
			template: 'index.html',
			inject: true
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
	 port: 3000
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map' //每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap.
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map' //生成一个SourceMap文件.
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.entry = './src/index.js'
  module.exports.watch = true
  module.exports.output = {
	  path: path.resolve(__dirname, './dist'),
	  publicPath: '/dist/',
	  filename: 'vui.js'
  },
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
	  new ExtractTextPlugin("style.css")
  ])
	module.exports.module.rules = rules2
}
