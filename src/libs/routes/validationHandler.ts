function validationHandler(config) {
  return function(req, res, next) {
    const key_value = Object.keys(config);
    key_value.forEach(key => {
      const item = config[key];
      const values = item.in.map(item => {
        return req[item][key];
      });

      if (item && item.required) {
        console.log("Inside required middle ware");
        const variable = values.filter(item => item);
        if (variable.length !== values.length) {
          next({
            status: "Bad Request",
            message: item.errorMessage || `${key} is required`
          });
        }
      } else if (isNaN(req.query.skip) && isNaN(req.query.limit)) {
        req.query.skip = 0;
        req.query.limit = 10;
      }
      console.log(req.query.skip);
      console.log(req.query.limit);

    
      if (item && item.string) {
        console.log("Inside string check middle ware");
        const variable = values.filter(item => item);
        if (typeof variable[0] != "string") {
          next({
            status: "Bad Request",
            message: `${key} should be string` || "Error Occurred"
          });
        }
      }

      if (item && item.regex) {
        console.log("Inside regex check middle ware");
        const variable = values.filter(item => item);
        const regex = item.regex;
        if (!regex.test(variable[0])) {
          next({
            status: "Bad Request",
            message: `${key} is Invalid` || "Error Occurred"
          });
        }
      }

      // if (item && item.number) {
      //   console.log("Inside number check middle ware");
      //   const variable = values.filter(item => item);
      //   if (typeof variable[0] != "number") {
      //     next({
      //       status: "Bad Request",
      //       message: `${key} should be number` || "Error Occurred"
      //     });
      //   }
      // }

      if (item && item.isObject) {
        const variable = values.filter(item => item);
        if (typeof variable[0] != "object") {
          next({
            status: "Bad Request",
            message: `${key} should be object` || "Error Occurred"
          });
        }
      }

      if (item && item.custom) {
        item.custom(values);
      }
    });
    next();
  };
}

export default validationHandler;
