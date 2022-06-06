import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { RoleDto } from './role.dto';
import { RoleRepository } from './role.repository';
import { getConnection } from 'typeorm';
import { Permission } from '../permission/permission.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private roleRepository: RoleRepository,
  ) {}

  async createRole(role: RoleDto): Promise<Role> {
    return this.roleRepository.save(role);
  }

  async addPermission(id: number, permissionId: number): Promise<boolean> {
    try {
      await getConnection()
        .createQueryBuilder()
        .relation(Role, 'permission')
        .of(id)
        .add(permissionId);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
