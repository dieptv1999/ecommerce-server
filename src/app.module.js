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
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var config_1 = require("@nestjs/config");
var graphql_1 = require("@nestjs/graphql");
var apollo_1 = require("@nestjs/apollo");
var typeorm_1 = require("@nestjs/typeorm");
var auth_module_1 = require("./auth/auth.module");
var users_module_1 = require("./users/users.module");
var redis_module_1 = require("./redis/redis.module");
var redis_constants_1 = require("./redis/redis.constants");
var role_module_1 = require("./role/role.module");
var permission_module_1 = require("./permission/permission.module");
var product_module_1 = require("./product/product.module");
var sku_service_1 = require("./sku/sku.service");
var sku_controller_1 = require("./sku/sku.controller");
var sku_module_1 = require("./sku/sku.module");
var RedisStore = require("connect-redis");
var passport = require("passport");
var session = require("express-session");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
var nest_next_1 = require("nest-next");
var next_1 = require("next");
var AppModule = /** @class */ (function () {
    function AppModule(redis) {
        this.redis = redis;
    }
    AppModule.prototype.configure = function (consumer) {
        consumer
            .apply(session({
            store: new (RedisStore(session))({
                client: this.redis,
                logErrors: true
            }),
            saveUninitialized: false,
            secret: 'sup3rs3cr4d5r',
            resave: false,
            cookie: {
                sameSite: true,
                httpOnly: false,
                maxAge: 60000
            }
        }), passport.initialize(), passport.session())
            .forRoutes('*');
    };
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                nest_next_1.RenderModule.forRootAsync((0, next_1["default"])({ dev: process.env.NODE_ENV !== 'production' })),
                config_1.ConfigModule.forRoot(),
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    debug: true,
                    playground: false,
                    autoSchemaFile: 'schema.gql'
                }),
                typeorm_1.TypeOrmModule.forRoot({
                    autoLoadEntities: true
                }),
                auth_module_1.AuthModule,
                users_module_1.UsersModule,
                redis_module_1.RedisModule,
                role_module_1.RoleModule,
                permission_module_1.PermissionModule,
                product_module_1.ProductModule,
                sku_module_1.SkuModule,
                platform_express_1.MulterModule.register({
                    storage: (0, multer_1.memoryStorage)()
                }),
            ],
            controllers: [app_controller_1.AppController, sku_controller_1.SkuController],
            providers: [app_service_1.AppService, common_1.Logger, sku_service_1.SkuService]
        }),
        __param(0, (0, common_1.Inject)(redis_constants_1.REDIS))
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
