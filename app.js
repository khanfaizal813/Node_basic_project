const express = require('express');
const http = require('http')
const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();
var db = require('./models');

require('./config/routes')(router, app)
app.use(router);

db.sequelize.sync()
    .then(success => {
        app.listen(port, () => {
            console.log("Server Listen on Port ", port);
        })
    }).catch(e => {
        console.log("Sequlize sync error", e)
    });