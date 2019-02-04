import UserRepository from '.././repositories/user/UserRepository';
export default function seedData() {
  console.log('Inside Seed Function');
  const repository = new UserRepository();
  // repository.create({ name: "trainee2", id: "2" });
  // repository.delete({ name: "trainee2" });
  // repository.update({ name: "trainee" }, { name: "Newtrainee" });
  // repository.getUser({ id: 5c5447c265e0bd4bd0991139 });

  repository.count().then((count) => {
    if (count === 0) {
      repository.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-Trainer',
        role: 'head-trainer',
      });
      repository.create({
        email: 'trainer@successive.tech',
        name: 'Trainer',
        role: 'trainer',
      });
    }
  });
}