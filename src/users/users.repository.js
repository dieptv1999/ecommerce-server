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
exports.UserRepository = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRepository.prototype.createUser = function (createUserDto) {
        var user = this.create();
        var password = createUserDto.password, email = createUserDto.email, firstName = createUserDto.firstName, lastName = createUserDto.lastName, username = createUserDto.username, address = createUserDto.address, phone = createUserDto.phone, confirmationPassword = createUserDto.confirmationPassword;
        user.password = password;
        user.email = email;
        user.firstName = firstName;
        user.lastName = lastName;
        user.username = username;
        user.address = address;
        user.phone = phone;
        user.confirmationPassword = confirmationPassword;
        try {
            return this.save(user);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    UserRepository = __decorate([
        (0, typeorm_1.EntityRepository)(user_entity_1.User)
    ], UserRepository);
    return UserRepository;
}(typeorm_1.Repository));
exports.UserRepository = UserRepository;
