// db/connection.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Onepunchman1!',
  database: 'employee_db',
});

module.exports = connection;
