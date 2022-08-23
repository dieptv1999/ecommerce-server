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

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  action: string;

  @Column({ nullable: true })
  description: string;

  // @Field((id) => [Role], { nullable: true })
  // @ManyToMany(() => Role, (role) => role.permission, {
  //   nullable: true,
  // })
  // roles: Role[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
