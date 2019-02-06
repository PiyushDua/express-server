import UserRepository from '.././repositories/user/UserRepository';
export default function seedData() {
  console.log('Inside Seed Function');
  const repository = new UserRepository();

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
