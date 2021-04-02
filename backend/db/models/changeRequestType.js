const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('changeRequestType', {
        changeRequestType_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        changeRequestType_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'changeRequestType',
        schema: 'dbo',
        timestamps: false,
        underscored: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    });
};