const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const databaseConfiguration = require('../config/constant').databaseIdPass;

var sequelize = new Sequelize(databaseConfiguration.name, databaseConfiguration.user, databaseConfiguration.password, {
    host : databaseConfiguration.host,
    dialect : 'mysql',
    port : databaseConfiguration.port,
    define: {
        underscored: true
    }
});

var db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        console.log(file);
        var model = sequelize.import(path.join(__dirname, file));
        console.log(model);
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;