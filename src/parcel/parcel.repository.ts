import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Parcel } from './parcel.entity';
import { ParcelCreateDto } from './parcel.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ParcelRepository extends Repository<Parcel> {
  constructor(private dataSource: DataSource) {
    super(Parcel, dataSource.createEntityManager());
  }

  createParcel(parcelCreateDto: ParcelCreateDto): Promise<Parcel> {
    const parcel = this.create();

    const { skuId, amount } = parcelCreateDto;

    parcel.skuId = skuId;
    parcel.amount = amount;

    try {
      return this.save(parcel);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
