import * as mongoose from 'mongoose';
import { IUserModel } from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepository {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }

  public count() {
    return this.model.countDocuments({});
  }

  public findOne(query) {
    return this.model.findOne(query);
  }

  public create(data): Promise<IUserModel> {
    console.log('Successfully Created');
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId(),
      function(err) {
        if (!err) {
          console.log('Successfully Created');
        }
      },
    });
  }

  public delete(data) {
    return this.model.deleteOne({ ...data }, (err) => {
      if (!err) {
        console.log('Successfully Deleted');
      } else {
        console.log('Error in Deletion');
      }
    });
  }

  public update(oldData, newData) {
    return this.model.updateOne(oldData, newData, (err) => {
      if (!err) {
        console.log('Data is updated');
      } else {
        console.log('Error in updating the Data');
      }
    });
  }

  public getUser(data) {
    return this.model.findById(data, (err) => {
      console.log(err);
    });
  }
}
