// ./db/queries.js
const connection = require('./connection');

function viewRoles() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM role', (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.table(results);
        resolve(results);
      }
    });
  });
}

function viewEmployees() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.table(results);
        resolve(results);
      }
    });
  });
}

function viewDepartments() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM department', (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.table(results);
        resolve(results);
      }
    });
  });
}

function addDepartment(departmentName) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO department (name) VALUES (?)', [departmentName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Department "${departmentName}" added successfully!`);
        resolve(results);
      }
    });
  });
}

function addRole(title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Role "${title}" added successfully!`);
        resolve(results);
      }
    });
  });
}

function addEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Employee "${firstName} ${lastName}" added successfully!`);
        resolve(results);
      }
    });
  });
}

function updateEmployeeRole(employeeId, newRoleId) {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Employee role updated successfully!`);
        resolve(results);
      }
    });
  });
}

module.exports = {
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  viewDepartments,
};