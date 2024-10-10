const sequelize = require('../config/connection');
const { Jot, User } = require('../models');
const userData = [];
const jotData = require('./jotData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Jot.bulkCreate(jotData, {
    });

    for (const id of userData) {
        //randomly generate id for user
        await User.create({
            ...id,
            User_id: user[Math.floor(Math.random() * users.length)].id,
        });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        process.exit(0);
    };
    try {
        seedDatabase();
    } catch (error) {
        console.log(error)
    }
}
