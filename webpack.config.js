const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

class InjectEntryPlugin {
  apply(compiler) {
    new compiler.webpack.EntryPlugin(compiler.context, path.resolve('./dummy.entry.js'), {
        name: undefined,
    }).apply(compiler);
  }
}

module.exports = {
  mode: 'production',
  entry: {
    master: {
      import: './master.js',
    },
    slave: {
      dependOn: 'master',
      import: './slave.js',
    },
  },
  output: {
    path: __dirname + '/dist',
  },
  optimization: {
      minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new InjectEntryPlugin(),
  ]
}