import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcelRepository } from './parcel.repository';
import { ParcelService } from './parcel.service';
import { ParcelController } from './parcel.controller';
import { SkuService } from '../sku/sku.service';
import { SkuRepository } from '../sku/sku.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ParcelRepository]),
    TypeOrmModule.forFeature([SkuRepository]),
  ],
  providers: [ParcelService, SkuService],
  controllers: [ParcelController],
  exports: [ParcelService],
})
export class ParcelModule {}
