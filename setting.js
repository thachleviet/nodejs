require('dotenv').config() ;

module.exports = {
    DB_USER_MAIN: process.env.DB_USER_MAIN,
    DB_PASSWORD_MAIN: process.env.DB_PASSWORD_MAIN,
    DB_HOST_MAIN: process.env.DB_HOST_MAIN,
    DB_NAME_MAIN: process.env.DB_NAME_MAIN,
    DB_USER_PRODUCT: "root",
    DB_PASSWORD_PRODUCT: "",
    DB_HOST_PRODUCT: "localhost",
    DB_NAME_PRODUCT: "blog_products",
    REDIS_HOSTNAME: process.env.REDIS_HOSTNAME,
    REDIS_USERNAME: process.env.REDIS_HOSTNAME,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    SENTRY_DNS: process.env.SENTRY_DNS,
    ENV: process.env.ENV,
    API_BACKEND: process.env.API_BACKEND
} ;