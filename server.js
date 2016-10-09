var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
require('dotenv').config();
var PORT = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
})
.listen(PORT, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Running at http://0.0.0.0:3000');
});
