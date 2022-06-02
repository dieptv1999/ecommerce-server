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
exports.PermissionRepository = void 0;
var typeorm_1 = require("typeorm");
var permission_entity_1 = require("./permission.entity");
var PermissionRepository = /** @class */ (function (_super) {
    __extends(PermissionRepository, _super);
    function PermissionRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PermissionRepository.prototype.createRole = function (permissionDto) {
        var role = this.create();
        var action = permissionDto.action, description = permissionDto.description;
        role.action = action;
        role.description = description;
        try {
            return this.save(role);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    PermissionRepository = __decorate([
        (0, typeorm_1.EntityRepository)(permission_entity_1.Permission)
    ], PermissionRepository);
    return PermissionRepository;
}(typeorm_1.Repository));
exports.PermissionRepository = PermissionRepository;
