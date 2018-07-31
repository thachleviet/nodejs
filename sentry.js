const Raven = require("raven");
const { SENTRY_DNS, ENV } = require("./setting");

Raven.config(SENTRY_DNS, {
  environment: ENV,
  autoBreadcrumbs: {
    console: false
  },
  logger: "alireviews_worker"
}).install();

module.exports = Raven;
