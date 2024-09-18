var Sequelize = require("sequelize");
var sequelize;

sequelize = new Sequelize("class101","root","1234",{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    timezone: "+09:00",
    define:{
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
        freezeTableName:true
    }
});

var dB = {};
dB.users = require('./users.js')(sequelize, Sequelize.DataTypes);

dB.sequelize = sequelize;
dB.Sequelize = Sequelize;

module.exports = dB;

