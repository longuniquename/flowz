module.exports = function (/* functions */) {

    var API = function (chain) {
        this.chain = chain;
        this.current = null;

        var self = this;

        this.done = (function (self) {
            return function (err, val) {
                if (err) {
                    console.error(err);
                    return;
                }

                if (self.chain.length > self.current + 1) {
                    self.current++;
                    self.chain[self.current].call(self, val);
                } else if (self.end) {
                    self.end.call(self, val);
                }
            }
        })(self);
    };

    API.prototype.start = function (val) {
        if (this.chain.length > 0) {
            this.current = 0;
            this.chain[0].call(this, val);
        }
        return this;
    };

    API.prototype.end = function (end) {
        this.end = end;
    };

    return new API(arguments);
};
