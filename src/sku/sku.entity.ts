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
import { Product } from '../product/product.entity';

@ObjectType()
@Entity()
export class Sku {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Index()
  @Generated('uuid')
  uuid: string;

  @Field()
  @Column({ nullable: false, unique: true })
  sku: string;

  @Field()
  @Column({ nullable: true, type: 'float', default: 0.0 })
  price: number;

  @Field()
  @Column({ nullable: true })
  color: string;

  @Field()
  @ManyToOne((type) => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Field()
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ nullable: false, default: 12 })
  insurance: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
