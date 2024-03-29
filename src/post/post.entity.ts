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
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';
import { MinLength } from 'class-validator';
import { Category } from '../category/category.entity';

@ObjectType()
@Entity()
export class Post {
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
  @Column({ nullable: true, default: '' })
  background: string;

  @Field()
  @Column({ nullable: true, default: '' })
  thumbnail: string;

  @Field()
  @Column({ nullable: true })
  avatar: string;

  @Field()
  @Column({ nullable: true })
  userId: number;

  @Field()
  @ManyToOne((type) => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field()
  @Column({ nullable: false })
  description: string;

  @Field()
  @Column({ nullable: false, default: '' })
  @MinLength(1000)
  content: string;

  @Field()
  @Column({ nullable: true })
  type: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
