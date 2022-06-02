import { EntityRepository, Repository } from 'typeorm';
import { Sku } from './sku.entity';
import { SkuCreateDto } from './sku.dto';

@EntityRepository(Sku)
export class SkuRepository extends Repository<Sku> {
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
