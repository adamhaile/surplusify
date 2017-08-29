"use strict";

var through = require("through2"),
    preprocessor = require("surplus-preprocessor");

module.exports = function surplusify(file) {
    return through(function (buf, enc, next) {
        try {
            var raw = buf.toString('utf8'),
                processed = preprocessor.preprocess(raw);

            this.push(processed);
        } catch (e) {
            this.emit('error', e);
        }
        
        next();
    });
};
