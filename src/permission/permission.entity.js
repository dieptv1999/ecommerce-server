"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Permission = void 0;
var typeorm_1 = require("typeorm");
var graphql_1 = require("@nestjs/graphql");
var Permission = /** @class */ (function () {
    function Permission() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Permission.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false, unique: true })
    ], Permission.prototype, "action");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], Permission.prototype, "description");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Permission.prototype, "created_at");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Permission.prototype, "updated_at");
    Permission = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Permission);
    return Permission;
}());
exports.Permission = Permission;
