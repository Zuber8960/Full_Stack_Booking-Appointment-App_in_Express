const Sequelize = require('sequelize');

const sequelize = require('../utill/database');

const User = sequelize.define('user',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : Sequelize.STRING,
    phone : {
        type : Sequelize.STRING,
        unique : true,
    },
    email : {
        type : Sequelize.STRING,
        unique : true,
    }
});


module.exports = User ;