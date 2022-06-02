import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkuRepository } from '../sku/sku.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SkuRepository])],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
