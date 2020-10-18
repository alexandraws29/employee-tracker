const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: process.env.PORT || 3006,
    user: 'root',
    password: 'Catlady1233**',
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected as id ' + connection.threadID + '\n');
});