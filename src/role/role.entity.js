"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Role = void 0;
var typeorm_1 = require("typeorm");
var graphql_1 = require("@nestjs/graphql");
var permission_entity_1 = require("../permission/permission.entity");
var Role = /** @class */ (function () {
    function Role() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Role.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false, unique: true })
    ], Role.prototype, "name");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], Role.prototype, "description");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: true })
    ], Role.prototype, "type");
    __decorate([
        (0, graphql_1.Field)(function (id) { return [permission_entity_1.Permission]; }, { nullable: true }),
        (0, typeorm_1.ManyToMany)(function () { return permission_entity_1.Permission; }, function (permission) { return permission.id; }, {
            nullable: true
        }),
        (0, typeorm_1.JoinTable)()
    ], Role.prototype, "permission");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], Role.prototype, "created_at");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], Role.prototype, "updated_at");
    Role = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], Role);
    return Role;
}());
exports.Role = Role;
