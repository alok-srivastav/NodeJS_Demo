const mysql = require('mysql');
var mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee',
    multipleStatement: true
});

mySqlConnection.connect((err)=> {
    if(!err) {
        console.log('Connected');
    } else {
        console.log('Connected Failed!!');
    }
});

module.exports = mySqlConnection;