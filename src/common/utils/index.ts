import _ from 'lodash';
import constant from './constant';

function isAdmin(roles: number[]) {
  if (_.find(roles, (r) => r === constant.ROLES.ADMIN)) {
    return true;
  } else return false;
}

export default {
  isAdmin,
};
