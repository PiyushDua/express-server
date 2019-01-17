const permissions = {
  getUsers1: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  getUsers2: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName]["all"].includes(role)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(hasPermission("getUsers1", "trainee", "all"));
console.log(hasPermission("getUsers1", "head-trainer", "write"));
