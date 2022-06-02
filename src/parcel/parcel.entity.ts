import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sku } from '../sku/sku.entity';
import { Order } from '../order/order.entity';

@Entity()
export class Parcel {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false, default: 1 })
  amount: number;

  @ApiProperty()
  @Column({ nullable: false })
  skuId: number;

  @ApiProperty()
  @ManyToOne((type) => Sku, (sku) => sku.parcels)
  @JoinColumn({ name: 'skuId' })
  sku: Sku;

  @ApiProperty()
  @Column({ nullable: false })
  orderId: number;

  @ApiProperty()
  @ManyToOne((type) => Order, (order) => order.parcels)
  @JoinColumn({ name: 'orderId' })
  order: Order;
}
