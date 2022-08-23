import { DataSource, EntityRepository, Repository } from 'typeorm';
import { RoleDto } from './role.dto';
import { Role } from './role.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleRepository extends Repository<Role> {
  constructor(private dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }

  createRole(roleDto: RoleDto): Promise<Role> {
    const role = this.create();

    const { name, description } = roleDto;

    role.name = name;
    role.description = description;

    try {
      return this.save(role);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
