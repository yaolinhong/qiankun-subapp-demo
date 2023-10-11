const { defineConfig } = require("@vue/cli-service");
const ENV = process.env.NODE_ENV;
const name = process.env.APPNAME;
console.log("🚀 - process.env:", process.env.APPNAME);
const host =
  ENV === "prod" ? "todo生产地址" : `//localhost:${process.env.VUE_APP_PORT}`;
console.log("🚀 - host:", host);

module.exports = defineConfig({
  transpileDependencies: ["common"],
  publicPath: host,
  configureWebpack: (config) => {
    if (ENV !== "production") {
      // 非生产环境下开启缓存
      config.cache = {
        type: "filesystem",
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    Object.assign(config.output, {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    });
  },
  //子应用名称
  chainWebpack: (config) => config.resolve.symlinks(false),
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
