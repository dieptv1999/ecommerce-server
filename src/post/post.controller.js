"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProductController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var PostController = /** @class */ (function () {
    function ProductController(productService) {
        this.productService = productService;
    }
    ProductController.prototype.create = function (payload) {
        return this.productService.create(payload);
    };
    ProductController.prototype.get = function (params) {
        return this.productService.findOne(params === null || params === void 0 ? void 0 : params.id);
    };
    ProductController.prototype.hide = function (params) {
        return this.productService.findOne(params === null || params === void 0 ? void 0 : params.id);
    };
    __decorate([
        (0, common_1.Post)('create'),
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        __param(0, (0, common_1.Body)())
    ], ProductController.prototype, "create");
    __decorate([
        (0, common_1.Get)(':id'),
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        __param(0, (0, common_1.Param)())
    ], ProductController.prototype, "get");
    __decorate([
        (0, common_1.Put)(':id'),
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        __param(0, (0, common_1.Param)())
    ], ProductController.prototype, "hide");
    ProductController = __decorate([
        (0, swagger_1.ApiBearerAuth)(),
        (0, common_1.Controller)('product')
    ], ProductController);
    return ProductController;
}());
exports.ProductController = PostController;
