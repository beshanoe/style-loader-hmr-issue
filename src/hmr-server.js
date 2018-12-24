const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const express = require("express");
const app = express();
const config = require("./webpack.config");

const compiler = webpack(config);

app.use(require("webpack-hot-middleware")(compiler));

app.use(
  middleware(compiler, {
    publicPath: "/",
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  })
);

app.listen(3000, () =>
  console.log("Example app listening on port http://localhost:3000!")
);
