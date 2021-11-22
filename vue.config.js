'use strict'

const path = require('path')
const { merge } = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

const config = require('./config')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const { mockURL } = config[process.env.NODE_ENV]

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  // https://github.com/youzan/vant/issues/5735
  parallel: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: {
      '/dev-api': {
        target: mockURL,
        pathRewrite: {
          '^/dev-api': '/'
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    name: 'vue-h5-template',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  chainWebpack(config) {
    // set ts-loader
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })

    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
