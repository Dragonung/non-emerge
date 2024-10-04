const User = require('./User');
const Jot = require('./jot');

User.hasMany(Jot, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Jot.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Jot };