import { Injectable } from '@nestjs/common';
import { ParcelRepository } from './parcel.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Parcel } from './parcel.entity';
import { ParcelCreateDto } from './parcel.dto';

@Injectable()
export class ParcelService {
  constructor(
    @InjectRepository(ParcelRepository)
    private readonly parcelRepository: ParcelRepository,
  ) {}

  async create(payload: ParcelCreateDto): Promise<Parcel> {
    return this.parcelRepository.createParcel(payload);
  }
}
