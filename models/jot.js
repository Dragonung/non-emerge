const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Jot extends Model { }

Jot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        time_created: {
            type: DataTypes.DATE(6),
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        driver: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passengers: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Witness: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        insurance: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        damages: {
            type: DataTypes.STRING,
        },
        comments: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'jot',
    }
);

module.exports = Jot;