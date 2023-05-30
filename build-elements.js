const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/order/runtime.js',
        './dist/order/polyfills.js',
        './dist/order/main.js'
    ];

    await fs.ensureDir('web-components');
    await concat(files, 'web-components/buyback-order-history.js');
})();