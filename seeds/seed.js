const sequelize = require('../config/connection');
const { Jot, User } = require('../models');
const userData = [];
const jotData = require('./jotData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();