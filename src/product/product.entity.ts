import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  Index,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { ProductStatus } from './product.constant';

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
  @Column({ nullable: true })
  rate: number;

  @Field()
  @Column({ nullable: false })
  origin: string;

  @Field()
  @Column({})
  trademark: string;

  @Field()
  @Column({ nullable: true })
  description: string;

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
