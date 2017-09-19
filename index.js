"use strict";

var through = require("through2"),
    compiler = require("surplus/compiler");

module.exports = function surplusify(file) {
    return through(function (buf, enc, next) {
        try {
            var raw = buf.toString('utf8'),
                processed = compiler.compile(raw);

            this.push(processed);
        } catch (e) {
            this.emit('error', e);
        }
        
        next();
    });
};
