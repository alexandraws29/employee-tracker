// Dependencies
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

// Create the connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Catlady1233**',
    database: 'employees'
});


connection.connect(err => {
    if (err) throw err;
    console.log('Connected as id ' + connection.threadID);
    afterConnection();
});


// Prompt the user
afterConnection = () => {
    // Questions
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    // Answers based on user repsponses
    .then(({ option }) => {
        if( option === 'View all departments'){
            dispDept();
        } else if( option === 'View all roles'){
            dispRole();
        } else if( option === 'View all employees'){
            dispEmp();
        } else if( option === 'Add a department'){
            addDept();
        } else if( option === 'Add a role'){
            addRole();            
        } else if( option === 'Add an employee'){
            addEmp()
        } else if( option === 'Update an employee role'){
            updateEmp();
        }
})};

// Display the Department table
function dispDept(){
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
      });            

};

// Display the Role table
function dispRole(){
    connection.query('SELECT * FROM role', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
      });            
};

// Display the Employee table
function dispEmp(){
    connection.query('SELECT * FROM employee', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
      });            
};

// Adding a department
function addDept() {
    inquirer.prompt(
        {
        type: "input",
        name: "department",
        message: "What is the name of the Department you would like to add?"
        }
    ).then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department],
        console.log('Department Added!'),
        afterConnection()
    )});
};

// Adding a Role
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the role you would like to add?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "number",
            name: "departmentId",
            message: "What is the role's department ID"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [res.title, res.salary, res.departmentId],
        console.log('Role Added!'),
        afterConnection()
    )});
};

// Adding an Employee
function addEmp() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId],
        console.log('Employee Added!'),
        afterConnection()
    )});
};


function updateEmp() {
    inquirer.prompt([
        {
            message: "What is the employee ID whose role you would like to update",
            type: "number",
            name: "empId"
        },
        {
            message: "Enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (res) {
        connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [res.role_id, res.empId],

            console.log("Employee role updated!"),
            afterConnection()
    )})
};