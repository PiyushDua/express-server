import * as mongoose from 'mongoose';

export class VersionableRepository<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  private model: M;
  constructor(model) {
    console.log('Inside constructor');
    this.model = model;
  }

  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public create(data): Promise<D> {
    const id = this.generateObjectId();
    const newData = { ...data, _id: id, originalId: id };
    console.log('>>>>>>>>>>>>>>>>>', newData);
    return this.model.create(newData);
  }

  public delete(data) {
    console.log(data);
    return this.find(data).lean().then((founddata) => {
        const del = founddata.deletedAt;
        const name = founddata.name;
        console.log(founddata);
        if (!del) {
            return this.model.updateOne(data, { $set: { deletedAt: true } } );
        }
    });
  }

  public count() {
    return this.model.countDocuments();
  }

  public update(data) {
    console.log(data);
    return this.find({ originalId: data.originalId, deletedAt: undefined })
      .lean()
      .then((data1) => {
        this.create(Object.assign(data1, { name: data.name })).then(
          (result) => {
            return this.model.updateOne(
              { _id: result._id },
              { originalId: data.originalId },
              (err) => {
                console.log('Error');
              });
            });
        this.model
        .updateOne(
          { _id: data1._id },
          { $set: { deletedAt: true, createdAt: Date.now() } },
          { upsert: true },
        )
        .then((err) => {
          console.log(err);
        });
      });
  }

  public find(data) {
    return this.model.findOne(data);
  }
}
