"use strict";
exports.__esModule = true;
var Main_1 = require("./Main");
var Main_2 = require("./Main");
var moment = require("moment");
var test = function (a, b) {
    console.log(a + b);
    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
    Main_1.func(a + b);
    new Main_2["default"]()["function"](a + b);
    new Main_2["default"]().function2(a + b);
};
test(2, 3);
