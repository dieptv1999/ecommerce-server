"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Sku = void 0;
var typeorm_1 = require("typeorm");
var graphql_1 = require("@nestjs/graphql");
var product_entity_1 = require("../product/product.entity");
var Sku = /** @class */ (function () {
    function Sku() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Sku.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Generated)('uuid')
    ], Sku.prototype, "uuid");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false, unique: true })
    ], Sku.prototype, "sku");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true, type: 'float', "default": 0.0 })
    ], Sku.prototype, "price");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], Sku.prototype, "color");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.ManyToOne)(function (type) { return product_entity_1.Product; }),
        (0, typeorm_1.JoinColumn)({ name: 'product_id' })
    ], Sku.prototype, "product");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], Sku.prototype, "description");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false, "default": 12 })
    ], Sku.prototype, "insurance");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Sku.prototype, "created_at");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Sku.prototype, "updated_at");
    Sku = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Sku);
    return Sku;
}());
exports.Sku = Sku;
