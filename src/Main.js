"use strict";
exports.__esModule = true;
exports.func = function (x) {
    console.log('test 에서 실행', x);
};
var Main = /** @class */ (function () {
    function Main() {
        this["function"] = exports.func;
        this.function2 = exports.func;
    }
    return Main;
}());
exports["default"] = Main;
