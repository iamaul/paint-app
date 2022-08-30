const { override } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");

// eslint-disable-next-line no-undef
module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
        },
    })
);
