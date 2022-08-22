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
import { Post } from '../post/post.entity';

@ObjectType()
@Entity()
export class Category {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Index()
  @Generated('uuid')
  uuid: string;

  @Field()
  @Column({ nullable: false, unique: true })
  name: string;

  @Field()
  @Column({ nullable: true, default: '' })
  background: string;

  @Field()
  @Column({ nullable: true, default: '' })
  thumbnail: string;

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

  @ManyToMany(() => Post)
  @JoinTable()
  categories: Post[];

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
