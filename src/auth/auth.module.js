"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var users_module_1 = require("../users/users.module");
var passport_1 = require("@nestjs/passport");
var local_strategy_1 = require("./local.strategy");
var auth_controller_1 = require("./auth.controller");
var serialization_provider_1 = require("./serialization.provider");
var jwt_1 = require("@nestjs/jwt");
var constant_1 = require("../common/utils/constant");
var jwt_strategy_1 = require("./jwt.strategy");
var config_1 = require("@nestjs/config");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Module)({
            imports: [
                users_module_1.UsersModule,
                passport_1.PassportModule.register({
                    session: true
                }),
                jwt_1.JwtModule.register({
                    secret: constant_1.jwtConstants.secret,
                    signOptions: { expiresIn: '60s' }
                }),
                config_1.ConfigModule,
            ],
            providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, serialization_provider_1.AuthSerializer, jwt_strategy_1.JwtStrategy],
            controllers: [auth_controller_1.AuthController],
            exports: [auth_service_1.AuthService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
