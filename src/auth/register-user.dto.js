"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterUserDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var RegisterUserDto = /** @class */ (function () {
    function RegisterUserDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MinLength)(4),
        (0, class_validator_1.MaxLength)(30),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], RegisterUserDto.prototype, "username");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], RegisterUserDto.prototype, "firstName");
    __decorate([
        (0, class_validator_1.IsPhoneNumber)('VI'),
        (0, swagger_1.ApiProperty)()
    ], RegisterUserDto.prototype, "phone");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], RegisterUserDto.prototype, "address");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)()
    ], RegisterUserDto.prototype, "lastName");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)(),
        (0, swagger_1.ApiProperty)()
    ], RegisterUserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(4),
        (0, class_validator_1.MaxLength)(20),
        (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'password too weak'
        })
    ], RegisterUserDto.prototype, "password");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(4),
        (0, class_validator_1.MaxLength)(20),
        (0, class_validator_1.Equals)('password')
    ], RegisterUserDto.prototype, "passwordConfirm");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], RegisterUserDto.prototype, "confirmationPassword");
    return RegisterUserDto;
}());
exports.RegisterUserDto = RegisterUserDto;
