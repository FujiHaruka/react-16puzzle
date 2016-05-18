'use strict'
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const fallback = require('express-history-api-fallback')
const config = require('./webpack.config')
const Express = require('express')

let app = new Express()
let port = 3000

let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(Express.static('static'))
app.use(fallback(__dirname + '/static/index.html'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
