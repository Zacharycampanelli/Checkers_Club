const {faker} = require ('@faker-js/faker')

const db = require ('../config/connection');

const { User } = require('../models');

db.once('open', async () => {
 
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    
     const username = faker.internet.userName();
     const email = faker.internet.email(username);
     const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);
  console.log(createdUsers.insertedCount)

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { _id: userId } = createdUsers.insertedIds[randomUserIndex];
    console.log(userId.toString())

    let friendId = userId.toString();

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
      friendId = createdUsers.insertedIds[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }
  console.log('all done!');
  process.exit(0);
});

