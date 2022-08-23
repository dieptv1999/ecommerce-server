import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Trademark } from './trademark.entity';
import { TrademarkDto } from './trademark.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrademarkRepository extends Repository<Trademark> {
  constructor(private dataSource: DataSource) {
    super(Trademark, dataSource.createEntityManager());
  }

  createTrademark(trademarkDto: TrademarkDto): Promise<Trademark> {
    const role = this.create();

    const { name, description } = trademarkDto;

    role.name = name;
    role.description = description;

    try {
      return this.save(role);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
