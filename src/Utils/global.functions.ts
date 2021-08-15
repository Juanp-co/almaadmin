import {rolesListTextWithoutAdmin} from './data.static';


export function getRolesText(rolesList: number[], defaultText: boolean): string {
  let ret = defaultText ? 'NO SE ENCONTRARON LOS ROLES.' : '';
  if (rolesList.length > 0) {
    ret = '';
    for (const v of rolesList) {
      if (ret === '') ret = rolesListTextWithoutAdmin[v - 1];
      else ret += `, ${rolesListTextWithoutAdmin[v - 1]}`;
    }
  }
  return ret;
}
