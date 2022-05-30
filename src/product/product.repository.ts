import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { ProductCreateDto } from './product-create-dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  createProduct(productCreateDto: ProductCreateDto): Promise<Product> {
    const product = this.create();

    const { name, description } = productCreateDto;

    product.name = name;
    product.description = description;

    try {
      return this.save(product);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
