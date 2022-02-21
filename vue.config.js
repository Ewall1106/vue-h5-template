"use strict";

const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const config = require("./src/utils/config");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const { NODE_ENV, COMPRESS } = process.env;
const { mockUrl } = config[NODE_ENV];
const isDev = NODE_ENV === "development" || NODE_ENV === "local";

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: isDev,
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/dev-api": {
        target: mockUrl,
        pathRewrite: {
          "^/dev-api": "/",
        },
        secure: false,
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",
    name: "vue-h5-template",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);

    config.plugins.delete("prefetch");

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10240,
      })
      .end();

    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(!isDev, (config) => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });

      config.optimization.runtimeChunk("single");
    });

    config.when(!isDev && COMPRESS, (config) => {
      // Notice：https://github.com/webpack-contrib/compression-webpack-plugin/issues/223
      config.plugin("compressPlugin").use(CompressionPlugin, [
        {
          algorithm: "gzip",
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: true,
        },
      ]);
    });

    config.when(!isDev, (config) => {
      config.plugin("FileManagerPlugin").use(FileManagerPlugin, [
        {
          events: {
            onEnd: {
              delete: ["dist.zip"],
              archive: [{ source: "./dist", destination: "dist.zip" }],
            },
          },
        },
      ]);
    });
  },
};
