import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  Index,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductStatus } from './product.constant';
import { Trademark } from '../trademark/trademark.entity';

@ObjectType()
@Entity()
export class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Index()
  @Generated('uuid')
  uuid: string;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column({ nullable: true, default: 1 })
  rate: number;

  @Field()
  @Column({ nullable: false })
  origin: string;

  @Field()
  @Column({ nullable: true })
  trademarkId: number;

  @Field()
  @ManyToOne((type) => Trademark)
  @JoinColumn({ name: 'trademarkId' })
  trademark: Trademark;

  @Field()
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ nullable: true })
  type: string;

  @Field()
  @Column({ nullable: true })
  feature: string;

  @Field()
  @Column({
    type: 'enum',
    enum: ProductStatus,
    default: [ProductStatus.CREATED],
  })
  status: string;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
