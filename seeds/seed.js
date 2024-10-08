const sequelize = require('../config/connection');
const { jot } = require('../models');

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