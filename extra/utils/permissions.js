const getUser = "getUsers";
const HeadTrainer = "head-trainer";
const Trainee = "trainee";
const Trainer = "trainer";

const permissions = {
  getUsers: {
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

console.log(hasPermission("getUsers", "trainee", "all"));
console.log(hasPermission("getUsers", "head-trainer", "write"));
