import { isEmpty, find } from 'lodash';
import constant from './constant';
import { Role } from '../../role/role.entity';

function isAdmin(roles: Role[]) {
  console.log(roles, 'roles');
  if (!isEmpty(roles) && find(roles, (r) => r.id === constant.ROLES.ADMIN)) {
    return true;
  } else return false;
}

export default {
  isAdmin,
};
