const User = require('./User');
const Jot = require('./Jot');

User.hasMany(Jot, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Jot.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Jot };