import { EntityRepository, Repository } from 'typeorm';
import { RoleDto } from './role.dto';
import { Role } from './role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
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
