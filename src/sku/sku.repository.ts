import {DataSource, EntityRepository, Repository} from 'typeorm';
import { Sku } from './sku.entity';
import { SkuCreateDto } from './sku.dto';
import { Injectable } from '@nestjs/common';
import {Trademark} from "../trademark/trademark.entity";

@Injectable()
export class SkuRepository extends Repository<Sku> {
  constructor(private dataSource: DataSource) {
    super(Sku, dataSource.createEntityManager());
  }

  createSku(skuCreateDto: SkuCreateDto): Promise<Sku> {
    const skuEntity = this.create();

    const {
      sku,
      description,
      price,
      color,
      important,
      insurance,
      productId,
      images,
      discount,
    } = skuCreateDto;

    skuEntity.sku = sku;
    skuEntity.description = description;
    skuEntity.price = price;
    skuEntity.color = color;
    skuEntity.important = important;
    skuEntity.insurance = insurance;
    skuEntity.productId = productId;
    skuEntity.images = images;
    skuEntity.discount = discount;

    try {
      return this.save(skuEntity);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
