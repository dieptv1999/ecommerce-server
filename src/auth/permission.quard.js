"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminGuard = void 0;
var common_1 = require("@nestjs/common");
var logged_in_guard_1 = require("./logged-in.guard");
var utils_1 = require("../common/utils");
var AdminGuard = /** @class */ (function (_super) {
    __extends(AdminGuard, _super);
    function AdminGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminGuard.prototype.canActivate = function (context) {
        var req = context.switchToHttp().getRequest();
        return (_super.prototype.canActivate.call(this, context) &&
            utils_1["default"].isAdmin(req.session.passport.user.roles));
    };
    AdminGuard = __decorate([
        (0, common_1.Injectable)()
    ], AdminGuard);
    return AdminGuard;
}(logged_in_guard_1.LoggedInGuard));
exports.AdminGuard = AdminGuard;
