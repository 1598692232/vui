var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve (dir) {
  return path.join(__dirname, '/', dir)
}
var styleRule = process.env.NODE_ENV == 'production'
	? 	{
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
		}
	: {
			test: /\.(vue|less)$/,
			loader: 'vue-loader'
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
	styleRule,
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
		loader: 'url-loader?limit=8192&name=[name].[ext]?[hash]'
	},
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
		new webpack.optimize.OccurrenceOrderPlugin(), // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
		// new webpack.HotModuleReplacementPlugin(),
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
	 // contentBase: "./test",
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
	  new ExtractTextPlugin("vui.css"),
	  // new webpack.optimize.CommonsChunkPlugin('common.js')
	  new webpack.optimize.CommonsChunkPlugin({
		  name:"vui",
		  filename:"common.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
	  })

  ])
}
