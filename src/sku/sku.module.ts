import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkuRepository } from './sku.repository';
import { SkuService } from './sku.service';
import { SkuController } from './sku.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SkuRepository])],
  providers: [SkuService],
  controllers: [SkuController],
  exports: [SkuService, TypeOrmModule.forFeature([SkuRepository])],
})
export class SkuModule {}
