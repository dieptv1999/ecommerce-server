"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var constant_1 = require("./constant");
function isAdmin(roles) {
    console.log(roles, 'roles');
    if (!(0, lodash_1.isEmpty)(roles) && (0, lodash_1.find)(roles, function (r) { return r.id === constant_1["default"].ROLES.ADMIN; })) {
        return true;
    }
    else
        return false;
}
exports["default"] = {
    isAdmin: isAdmin
};
