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
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from '../product/product.entity';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Parcel } from '../parcel/parcel.entity';

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
  @Column({ type: 'number', nullable: true })
  productId: number;

  @Field()
  @ManyToOne((type) => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Field()
  @Column({ nullable: true, default: 0 })
  discount: number;

  @Field()
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ nullable: false, default: 12 })
  insurance: number;

  @Field()
  @Column({ nullable: true, default: false })
  @IsBoolean()
  important: boolean;

  @Field()
  @Column({ default: 0 })
  amount: number;

  @Field()
  @Column({ default: false })
  available: boolean;

  @Field((type) => [String])
  @Column('simple-array', { nullable: true })
  @IsArray({ always: true })
  @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @ArrayMaxSize(10)
  images: string[];

  @Field()
  @IsString()
  @Column({ default: '1x1' })
  size: string;

  @Field((id) => [Parcel])
  @OneToMany((type) => Parcel, (parcel) => parcel.order)
  parcels: Parcel[];

  bought: number;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
