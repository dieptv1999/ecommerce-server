import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrademarkRepository } from './trademark.repository';
import { Trademark } from './trademark.entity';
import { TrademarkDto } from './trademark.dto';

@Injectable()
export class TrademarkService {
  constructor(
    @InjectRepository(TrademarkRepository)
    private trademarkRepository: TrademarkRepository,
  ) {}

  async createPermission(permission: TrademarkDto): Promise<Trademark> {
    return this.trademarkRepository.save(permission);
  }
}
