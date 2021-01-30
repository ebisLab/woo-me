const path = require("path");
module.exports = {
    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };

        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    env:{
        NEXT_PUBLIC_SITE_URL:process.env.NEXT_PUBLIC_SITE_URL
    }
};