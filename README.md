# employee-tracker

A command-line application for managing a company's employee database. Built with Node.js, Inquirer, and MySQL.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description: 

The Employee Tracker is a command-line application that allows business owners to view and manage departments, roles, and employees in their company. The application uses Node.js for the backend, Inquirer for user input, and MySQL as the database.

## Features:

View all departments, roles, and employees
Add new departments, roles, and employees
Update an employee's role

## Installation:

1. Clone the repository to your local machine:
git clone https://github.com/zchamber/employee-tracker

2. Navigate to the project directory:
cd employee-tracker

3. Run npm install in your terminal to install necessary dependencies:
npm install

4. Set up the MySQL database using the provided schema and seeds:
mysql -u root -p < schema.sql
mysql -u root -p < seeds.sql

5. Update the connection.js file in the db directory with your MySQL credentials.

## Usage:

To run the application, use the following command:

npm start

Follow the prompts to interact with the application and manage your employee database.

## License:

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing:

Feel free to contribute to this project. See the CONTRIBUTING file for guidelines.

## Questions:

If you have any questions or issues, please open an issue.