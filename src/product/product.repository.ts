import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductCreateDto } from './product-create.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  createProduct(productCreateDto: ProductCreateDto): Promise<Product> {
    const product = this.create();

    const {
      name,
      description,
      rate,
      status,
      trademarkId,
      origin,
      type,
      feature,
    } = productCreateDto;

    product.name = name;
    product.rate = rate;
    product.status = status;
    product.trademarkId = trademarkId;
    product.origin = origin;
    product.description = description;
    product.type = type;
    product.feature = feature;

    try {
      return this.save(product);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
