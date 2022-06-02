import { EntityRepository, Repository } from 'typeorm';
import { Permission } from './permission.entity';
import { PermissionDto } from './permission.dto';

@EntityRepository(Permission)
export class PermissionRepository extends Repository<Permission> {
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
