import { permissions } from "../constants";

export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): void {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName]["all"].includes(role)
    ) {
      console.log(
        `${role} have the ${permissionType} permission for the module ${moduleName}`
      );
    } else {
      console.log(
        `${role} do not have the ${permissionType} permission for the module ${moduleName}`
      );
    }
  } else {
    console.log(
      `${role} do not have the ${permissionType} permission for the module ${moduleName}`
    );
  }
}
