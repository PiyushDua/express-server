import * as mongoose from "mongoose";
class Database {
  static open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        mongoURL,
        { useNewUrlParser: true },
        err => {
          if (err) {
            reject("Error occurred in connecting to the Database");
          } else {
            console.log(
              "Successfully connected to the Database ..................."
            );
            const schema = new mongoose.Schema({ name: String, age: Number }); // Defining a schema
            const Person = mongoose.model("Person", schema);
            console.log(
              "The Schema for the Person is",
              new Person({ name: "trainee", age: 20 })
            );
            resolve({ data: "hello" });
          }
        }
      );
    });
  }

  static disconnect() {
    if (mongoose.disconnect()) {
      console.log("Successfully disconnected.................");
    } else {
      console.log("Error in disconnecting");
    }
  }
}

export default Database;
