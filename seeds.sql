-- Switch to the employee_tracker_1 database
USE employee_db;

-- Insert data into the department table
INSERT INTO department (name) VALUES
("Marketing"), ("Research and Development"), ("Human Resources"), ("Customer Support");


-- Insert data into the role table
INSERT INTO role (title, salary, department_id) VALUES
("Marketing Manager", 110000, 1),
("Research Scientist", 140000, 2),
("HR Specialist", 100000, 3),
("Customer Support Supervisor", 95000, 4);


-- Insert data into the employee table without specifying manager_id initially
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Peter", "Chamberlain", 1, NULL),
("Chris", "Crinkle", 2, NULL),
("Johnny", "Johnson", 3, NULL),
("Zesty", "Lemon", 4, NULL),
("Quigon", "Gin", 5, NULL),
("Lepard", "Larry", 2, NULL),
("Pait", "Corn", 4, NULL),
("Taylor", "Swift", 1, NULL);

-- Update manager_id based on the inserted employee data
UPDATE employee SET manager_id = CASE
    WHEN first_name = 'Peter' AND last_name = 'Chamberlain' THEN NULL
    WHEN first_name = 'Chris' AND last_name = 'Crinkle' THEN NULL
    WHEN first_name = 'Johnny' AND last_name = 'Johnson' THEN NULL
    WHEN first_name = 'Zesty' AND last_name = 'Lemon' THEN NULL
    WHEN first_name = 'Quigon' AND last_name = 'Gin' THEN NULL
    WHEN first_name = 'Lepard' AND last_name = 'Larry' THEN NULL
    WHEN first_name = 'Pait' AND last_name = 'Corn' THEN NULL
    WHEN first_name = 'Taylor' AND last_name = 'Swift' THEN NULL
END;
