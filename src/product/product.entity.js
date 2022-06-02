"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var graphql_1 = require("@nestjs/graphql");
var product_constant_1 = require("./product.constant");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Product.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Generated)('uuid')
    ], Product.prototype, "uuid");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false })
    ], Product.prototype, "name");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], Product.prototype, "rate");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false })
    ], Product.prototype, "origin");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({})
    ], Product.prototype, "trademark");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], Product.prototype, "description");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": product_constant_1.ProductStatus,
            "default": [product_constant_1.ProductStatus.CREATED]
        })
    ], Product.prototype, "status");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Product.prototype, "created_at");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Product.prototype, "updated_at");
    Product = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Product);
    return Product;
}());
exports.Product = Product;
