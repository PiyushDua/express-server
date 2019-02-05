import * as mongoose from 'mongoose';

export default class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const Schema = {
      _id: String,
      email: String,
      name: String,
      role: String,
    };
    super(Schema, options);
  }
}
