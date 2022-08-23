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
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ThrottlerModule } from '@nestjs/throttler';
import { User } from './users/user.entity';
import { Order } from './order/order.entity';
import { Parcel } from './parcel/parcel.entity';
import { Permission } from './permission/permission.entity';
import { Post } from './post/post.entity';
import { Product } from './product/product.entity';
import { Role } from './role/role.entity';
import { Sku } from './sku/sku.entity';
import { Trademark } from './trademark/trademark.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   debug: true,
    //   playground: false,
    //   autoSchemaFile: 'schema.gql',
    // }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'postgres',
      host: 'database-1.cihn7rugxfxc.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'dieptv1999',
      database: 'postgres',
      synchronize: true,
      // logging: true,
      // subscribers: [],
      // migrations: ['dist/src/database/migrations/*.js'],
      // // cli: {
      // //   migrationsDir: 'src/database/migrations',
      // // },
      entities: [
        User,
        Order,
        Parcel,
        Permission,
        Post,
        Product,
        Role,
        Sku,
        Trademark,
        Category,
      ],
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      renderPath: '/public',
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    CategoryModule,
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
