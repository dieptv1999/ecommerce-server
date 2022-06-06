import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Permission } from '../permission/permission.entity';

@ObjectType()
@Entity()
export class Role {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({ nullable: true })
  type: string;

  @Field((id) => [Permission], { nullable: true })
  @ManyToMany(() => Permission, (permission) => permission.roles, {
    nullable: true,
  })
  @JoinTable()
  permission: Permission[];

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
