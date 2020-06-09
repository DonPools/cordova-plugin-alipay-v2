var exec = require('cordova/exec');

exports.payment = function(payInfo, success, error) {
    exec(success, error, "alipay", "payment", [payInfo]);
};

exports.auth = function(authInfo, success, error) {
    exec(success, error, "alipay", "auth", [authInfo]);
};
