import * as jwt from "jsonwebtoken";
import hasPermission from "./permissions";
export default (module, permissionType) => (req, res, next) => {
  console.log("Inside auth middleware", module, permissionType);
  const token = req.header("Authorization");
  jwt.verify(token, process.env.Key, function(err) {
    if (err) {
      next({
        status: 403,
        message: "Unauthorized Access" || "Error Occurred"
      });
    } else {
      const verification = jwt.verify(token, process.env.Key);
      const role = verification.role;
      if (hasPermission(module, role, permissionType)) {
        console.log("Permissions not allowed");
      } else {
        next({
          status: "Bad request",
          message: `Permission ${permissionType} not allowed`
        });
      }
    }
  });
  next();
};
