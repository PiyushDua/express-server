import * as mongoose from "mongoose";

export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const Schema = {
      name: String,
      _id: String,
      role: String,
      email: String
    };
    super(Schema, options);
  }
}
