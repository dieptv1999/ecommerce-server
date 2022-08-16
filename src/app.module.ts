import {
  Inject,
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RedisModule } from './redis/redis.module';
import { REDIS } from './redis/redis.constants';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { ProductModule } from './product/product.module';
import { SkuService } from './sku/sku.service';
import { SkuController } from './sku/sku.controller';
import { SkuModule } from './sku/sku.module';
import * as RedisStore from 'connect-redis';
import * as passport from 'passport';
import * as session from 'express-session';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { HomepageModule } from './homepage/homepage.module';
import { ParcelModule } from './parcel/parcel.module';
import { OrderModule } from './order/order.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    RedisModule,
    RoleModule,
    PermissionModule,
    ProductModule,
    SkuModule,
    HomepageModule,
    PostModule,
    MulterModule.register({
      storage: memoryStorage(),
    }),
    ParcelModule,
    OrderModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, SkuController],
  providers: [AppService, Logger, SkuService],
})
export class AppModule implements NestModule {
  constructor(@Inject(REDIS) private readonly redis) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new (RedisStore(session))({
            client: this.redis,
            logErrors: true,
          }),
          saveUninitialized: false,
          secret: 'sup3rs3cr4d5r',
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: false,
            maxAge: 60000,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
