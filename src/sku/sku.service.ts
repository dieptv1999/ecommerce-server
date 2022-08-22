import { Injectable } from '@nestjs/common';
import { SkuRepository } from './sku.repository';
import { Sku } from './sku.entity';
import { SkuCreateDto } from './sku.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';
import { FilterQueryDto } from '../common/filter-query.dto';

@Injectable()
export class SkuService {
  constructor(
    @InjectRepository(SkuRepository)
    private readonly skuRepository: SkuRepository,
  ) {}

  list(params): Promise<[Sku[], number]> {
    return this.skuRepository.findAndCount({
      where: {},
      skip: params?.pos,
      take: params?.count,
    });
  }

  async create(payload: SkuCreateDto): Promise<Sku> {
    return this.skuRepository.createSku(payload);
  }

  async checkExist(id: number): Promise<boolean> {
    const skus = await this.skuRepository.find({ where: { id } });
    if (skus.length > 0) return true;
    else return false;
  }

  async listByIds(ids: number[]): Promise<[Sku[], number]> {
    return this.skuRepository.findAndCount({
      where: {
        id: In(ids || []),
      },
      relations: ['product'],
    });
  }

  async getByUUID(uuid: number): Promise<Sku> {
    return await this.skuRepository.findOne({ where: { uuid: `${uuid}` } });
  }

  async filter(payloads: FilterQueryDto): Promise<[Sku[], number]> {
    const condition = {};
    if (payloads.sortBy) {
      condition['created_at'] = payloads.sortBy.toUpperCase();
    }

    return this.skuRepository.findAndCount({
      where: condition,
      relations: ['product'],
      skip: payloads?.pos || 0,
      take: payloads?.count || 1,
    });
  }
}
