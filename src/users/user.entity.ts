import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from '../role/role.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false, unique: true })
  username: string;

  @Field()
  @Column({ nullable: false, unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column({ nullable: true })
  firstName: string;

  @Field()
  @Column({ nullable: true })
  lastName: string;

  @Field()
  @Column({ nullable: true })
  address: string;

  @Field()
  @Column({ nullable: true })
  phone: string;

  @Field()
  @Column({ nullable: true })
  avatar: string;

  @Field()
  @Column({ nullable: true })
  background: string;

  @Field()
  @Column({ nullable: true })
  confirmationPassword: string;

  @Field()
  @Column({ default: false })
  isActive: boolean;

  @Field()
  @Column({ default: false })
  blocked: boolean;

  @Field((id) => [Role], { nullable: true })
  @ManyToMany(() => Role, { nullable: true })
  @JoinTable()
  roles: Role[];

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;
}
