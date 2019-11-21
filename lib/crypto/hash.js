if (process.browser) module.exports = require('./hash.browser')
else if (typeof navigator != 'undefined', navigator.product == 'ReactNative') module.exports = require('./hash.browser')
else module.exports = require('./hash.node')
