const sequelize = require('../config/connection');
const { Jot, User } = require('../models');
const userData = require('./userData.json');
const jotData = require('./jotData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    console.log("*****",users);

    for (const jot of jotData) {
        //randomly generate id for user
        await Jot.create({
            ...jot,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });

        
        process.exit(0);
    };
    
}
seedDatabase();