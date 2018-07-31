module.exports = {
    apps:  [{
        name: "Thach",
        version: "1.0.0",
        private: true,
        scripts: {
            start: "node server.js"
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 3000
        },
        instances: "max"
    }]
};