import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkuRepository } from '../sku/sku.repository';
import { Sku } from '../sku/sku.entity';

@Injectable()
export class HomepageService {
  constructor(
    @InjectRepository(SkuRepository)
    private skuRepository: SkuRepository,
  ) {}

  async get(params): Promise<[Sku[], number]> {
    return this.skuRepository.findAndCount({
      where: {
        important: true,
      },
      order: {
        created_at: 'DESC',
      },
      relations: ['product'],
      skip: params?.pos || 0,
      take: params?.count || 10,
    });
  }
}
