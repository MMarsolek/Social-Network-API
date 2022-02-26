const connection = require('../configuration/connection');
const { User, Thought } = require('../models');

const getThought = require('./thought-seed');
const getUser = require('./user-seed');



 console.time('seeding');
// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({});
    await Thought.deleteMany({});
  
 
  let users = [];
  let thoughts = [];
  
    for (let i = 0; i < 20; i++) {
      thoughts.push(getThought());
      users.push(getUser());
    }
  
    await Thought.collection.insertMany(thoughts);
    await User.collection.insertMany(users);
  
    console.table(users);
    console.table(thoughts);

    console.timeEnd('seeding');
    process.exit(0);
  });