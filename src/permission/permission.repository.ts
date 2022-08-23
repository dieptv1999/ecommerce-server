import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Permission } from './permission.entity';
import { PermissionDto } from './permission.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionRepository extends Repository<Permission> {
  constructor(private dataSource: DataSource) {
    super(Permission, dataSource.createEntityManager());
  }

  createRole(permissionDto: PermissionDto): Promise<Permission> {
    const role = this.create();

    const { action, description } = permissionDto;

    role.action = action;
    role.description = description;

    try {
      return this.save(role);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
