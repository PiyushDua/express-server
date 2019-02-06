import * as mongoose from 'mongoose';
import { VersionableRepository } from './../versionable/VersionableRepository';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepository extends VersionableRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    super(userModel);
  }

  public findOne(query) {
    return this.findUser(query);
  }

  public create(data): Promise<IUserModel> {
    console.log('Successfully Created');
    return this.createUser(data);
  }

  public delete(data) {
    return this.deleteUser(data);
  }

  public update(data) {
    return this.updateUser(data);
  }
}
