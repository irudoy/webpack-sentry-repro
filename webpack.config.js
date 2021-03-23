const HtmlWebpackPlugin = require('html-webpack-plugin')
const SentryPlugin = require('@sentry/webpack-plugin')

module.exports = {
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
    new SentryPlugin({
        dryRun: true,
        authToken: 'authToken',
        url: 'https://example.com/',
        org: 'org',
        project: 'project',
        release: 'release',
        include: './dist',
    })
  ]
}