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
exports.ProductService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var product_repository_1 = require("./product.repository");
var ProductService = /** @class */ (function () {
    function ProductService(productRepository) {
        this.productRepository = productRepository;
    }
    ProductService.prototype.findOne = function (id) {
        return this.productRepository.findOne({
            where: { id: id },
            relations: ['roles']
        });
    };
    ProductService.prototype.create = function (product) {
        return this.productRepository.createProduct(product);
    };
    ProductService.prototype.hide = function (id) {
        return this.productRepository.save({
            id: id
        });
    };
    ProductService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(product_repository_1.ProductRepository))
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
