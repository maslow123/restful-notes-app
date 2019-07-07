const mysql = require('mysql');
require('dotenv').config();

var mysqlConnect = mysql.createConnection({
    host    : process.env.HOST,
    user    : process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
});

mysqlConnect.connect(function(err){
    if(err){
        return console.log('Something wrong in connecting database');
    }else{
        console.log('Database has been connected');
    }
});

module.exports = mysqlConnect;