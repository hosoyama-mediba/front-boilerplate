const withTypescript = require('@zeit/next-typescript')
const caseSensitive  = require('case-sensitive-paths-webpack-plugin');

module.exports = withTypescript({
  webpack(config, options) {
    // 以下対応しないとエラーでコケる
    // Module not found: Error: Can't resolve 'fs'
    config.node = {
      fs:     "empty",
      module: "empty",
      net:    "empty",
      tls:    "empty"
    }

    // entity達が勝手にlower参照されちゃう（ListEntity -> listEntity）ので
    config.plugins.push(new caseSensitive());
    return config
  },
  typescriptLoaderOptions: {
    transpileOnly: false
  }
})
