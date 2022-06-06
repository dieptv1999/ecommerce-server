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
import { Role } from '../role/role.entity';

@ObjectType()
@Entity()
export class Permission {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  action: string;

  @Field()
  @Column({ nullable: true })
  description: string;

  @Field((id) => [Role], { nullable: true })
  @ManyToMany(() => Role, (role) => role.permission, {
    nullable: true,
  })
  roles: Role[];

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
