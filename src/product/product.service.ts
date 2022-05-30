import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { Product } from './product.entity';
import { ProductCreateDto } from './product-create-dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id: id },
      relations: ['roles'],
    });
  }

  create(product: ProductCreateDto): Promise<Product> {
    return this.productRepository.createProduct(product);
  }

  hide(id: number): Promise<Product> {
    return this.productRepository.save({
      id,
    });
  }
}
