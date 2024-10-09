import db from '../config/connection.js';
import User from '../models/user.js';
import Thought from '../models/thought.js';

const seedDatabase = async () => {
    try {
        await db();

        await User.deleteMany({});
        await Thought.deleteMany({});

        const users = await User.insertMany([
            { username: 'BobBelcher', email: 'bob@bobsburgers.com' },
            { username: 'LindaBelcher', email: 'linda@bobsburgers.com' },
            { username: 'TinaBelcher', email: 'tina@bobsburgers.com' },
            { username: 'GeneBelcher', email: 'gene@bobsburgers.com' },
            { username: 'LouiseBelcher', email: 'louise@bobsburgers.com' },
          ]);

           await Thought.insertMany([
            {
              thoughtText: "Oh, crap. Oh, crap. Oh, crap, crap, crap. Crap!",
              username: users[0].username, 
            },
            {
              thoughtText: "I'm so mad I could stomp!",
              username: users[1].username, 
            },
            {
              thoughtText: "Uhhhhhhhhhhh...",
              username: users[2].username, 
            },
            {
              thoughtText: "Queen Latifah, give me strength!",
              username: users[3].username, 
            },
            {
              thoughtText: "You could sell your soul. I did, and look at me. I'm fine." ,
              username: users[4].username, 
            },
          ]);

          console.log('Database seeded successfully with Bob\'s Burgers characters!');
          process.exit(0);
        } catch (error) {
          console.error('Error seeding database:', error);
          process.exit(1);
        }
      };
            
    seedDatabase();