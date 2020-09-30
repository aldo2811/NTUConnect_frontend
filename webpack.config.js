const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const NODE_ENV = process.env.NODE_ENV || "development";

const envs = {
  development: "dev",
  production: "prod",
};

const env = envs[NODE_ENV];
// eslint-disable-next-line import/no-dynamic-require
const envConfig = require(`./webpack.${env}.js`);
module.exports = merge(common, envConfig);
