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
import { User } from '../users/user.entity';
import { MinLength } from 'class-validator';

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
  @Column({ nullable: true })
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

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
