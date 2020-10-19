const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

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
    afterConnection();
});

afterConnection = () => {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then(({ option }) => {
        if( option === 'View all departments'){
          
        }
    })
    .then(({ option }) => {
        if( option === 'View all roles'){
          
        }
    })
    .then(({ option }) => {
        if( option === 'View all employees'){
          
        }
    })
    .then(({ option }) => {
        if( option === 'Add a department'){
          
        }
    })
    .then(({ option }) => {
        if( option === 'Add a role'){
          
        }
    })
    .then(({ option }) => {
        if( option === 'Add an employee'){
          
        }
    })
    .then(({ option }) => {
        if( option === 'Update an employee role'){
          
        }
    })
    connection.end();
};