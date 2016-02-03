var $ = require('jquery');

var getPromise = function(options) {
    var promise = new Promise(function(resolve, reject) {

        // Make a standard ajax call, but resolve/reject the promise on return instead of callback-ings
        $.ajax(Object.assign(options, {
            success: function(data) {
                if (data && data.success === false) { // some of our APIs return 200 status for errors
                    reject(data.msg);
                } else {
                    resolve(data);
                }
            },
            error: function(error) {
                reject(error);
            }
        }));

    });

    return promise; // return promise for chaining, e.g., promise.then(success, error)
};

module.exports = getPromise;
