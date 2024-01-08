const inquirer = require('inquirer');
const readline = require('readline');
const readlineSync = require('readline-sync');
const {
  viewRoles,
  viewEmployees,
  viewDepartments,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./db/queries');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function mainMenu() {
  const { choice } = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit',
    ],
  });

  switch (choice) {
    case 'View all departments':
      await viewDepartments();
      break;
    case 'View all roles':
      await viewRoles();
      break;
    case 'View all employees':
      await viewEmployees();
      break;
    case 'Add a department':
      await addDepartmentPrompt();
      break;
    case 'Add a role':
      await addRolePrompt();
      break;
    case 'Add an employee':
      await addEmployeePrompt();
      break;
    case 'Update an employee role':
      await updateEmployeeRolePrompt();
      break;
    case 'Exit':
      console.log('Exiting...');
      rl.close(); // Close the readline interface
      process.exit(); // Terminate the process
    default:
      console.log('Invalid choice. Please select a valid option.');
  }

  await waitForKeyPress();
  console.clear();
  await mainMenu();
}

function waitForKeyPress() {
  console.log('\nPress Enter to continue...');
  readlineSync.keyInPause();
}


async function addDepartmentPrompt() {
  const { name } = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:',
  });

  await addDepartment(name);
}

async function addRolePrompt() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'number',
      name: 'departmentId',
      message: 'Enter the department ID for the role:',
    },
  ]);

  await addRole(answers.title, answers.salary, answers.departmentId);
}

async function addEmployeePrompt() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter the last name of the employee:',
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the role ID for the employee:',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the manager ID for the employee (optional, press Enter to skip):',
    },
  ]);

  await addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId || null);
}

async function updateEmployeeRolePrompt() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter the ID of the employee you want to update:',
    },
    {
      type: 'input',
      name: 'newRoleId',
      message: 'Enter the new role ID for the employee:',
    },
  ]);

  await updateEmployeeRole(answers.employeeId, answers.newRoleId);
}

mainMenu();