import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionRepository } from './permission.repository';
import { Permission } from './permission.entity';
import { PermissionDto } from './permission.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(PermissionRepository)
    private permissionRepository: PermissionRepository,
  ) {}

  async createPermission(permission: PermissionDto): Promise<Permission> {
    return this.permissionRepository.save(permission);
  }
}
