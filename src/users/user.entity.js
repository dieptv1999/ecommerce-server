"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var role_entity_1 = require("../role/role.entity");
var graphql_1 = require("@nestjs/graphql");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false, unique: true })
    ], User.prototype, "username");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ nullable: false, unique: true })
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "password");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "firstName");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "lastName");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "address");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "phone");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], User.prototype, "confirmationPassword");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)({ "default": false })
    ], User.prototype, "isActive");
    __decorate([
        (0, graphql_1.Field)(function (id) { return [role_entity_1.Role]; }, { nullable: true }),
        (0, typeorm_1.ManyToMany)(function () { return role_entity_1.Role; }, { nullable: true }),
        (0, typeorm_1.JoinTable)()
    ], User.prototype, "roles");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], User.prototype, "created_at");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.UpdateDateColumn)()
    ], User.prototype, "updated_at");
    User = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;
