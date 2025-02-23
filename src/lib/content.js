export const  sqlContent = `
# SQL (Structured Query Language) 📊

## 🔹 What is SQL?
SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases. It allows users to create, read, update, and delete data (CRUD operations). SQL is widely used in web applications, data analysis, and enterprise systems.

## 🔹 Who Created SQL?  
SQL was developed in the early 1970s by **Donald D. Chamberlin** and **Raymond F. Boyce** at **IBM**. Initially called **SEQUEL (Structured English Query Language)**, it was later renamed SQL due to trademark issues.

## 🔹 Why is SQL Important?
- Standard language for relational databases like MySQL, PostgreSQL, Oracle, and SQL Server.
- Provides powerful data manipulation and retrieval capabilities.
- Used for data analysis, reporting, and application backend storage.

---

# 💾 SQL Basics  

## 1️⃣ Creating a Database (\`CREATE DATABASE\`)
\`\`\`sql
CREATE DATABASE company;
\`\`\`
This command creates a new database named **company**.

## 2️⃣ Creating a Table (\`CREATE TABLE\`)
\`\`\`sql
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10,2),
    hired_on DATE
);
\`\`\`
Defines an **employees** table with columns for ID, name, position, salary, and hiring date.

## 3️⃣ Inserting Data (\`INSERT INTO\`)
\`\`\`sql
INSERT INTO employees (id, name, position, salary, hired_on) 
VALUES (1, 'Alice Johnson', 'Software Engineer', 75000.00, '2023-05-10');
\`\`\`
Adds an employee named Alice to the table.

## 4️⃣ Retrieving Data (\`SELECT\`)
\`\`\`sql
SELECT * FROM employees;
\`\`\`
Fetches all records from the **employees** table.

\`\`\`sql
SELECT name, position FROM employees WHERE salary > 50000;
\`\`\`
Fetches the names and positions of employees earning more than 50,000.

## 5️⃣ Updating Data (\`UPDATE\`)
\`\`\`sql
UPDATE employees 
SET salary = 80000 
WHERE id = 1;
\`\`\`
Increases Alice's salary to 80,000.

## 6️⃣ Deleting Data (\`DELETE\`)
\`\`\`sql
DELETE FROM employees WHERE id = 1;
\`\`\`
Removes Alice from the database.

---

# 📊 Advanced SQL  

## 7️⃣ Filtering with Conditions (\`WHERE\`)
\`\`\`sql
SELECT * FROM employees WHERE hired_on > '2022-01-01';
\`\`\`
Finds employees hired after 2022.

## 8️⃣ Sorting Data (\`ORDER BY\`)
\`\`\`sql
SELECT * FROM employees ORDER BY salary DESC;
\`\`\`
Lists employees by salary in descending order.

## 9️⃣ Aggregate Functions (\`COUNT, SUM, AVG\`)
- Count total employees:
\`\`\`sql
SELECT COUNT(*) FROM employees;
\`\`\`
- Calculate average salary:
\`\`\`sql
SELECT AVG(salary) FROM employees;
\`\`\`

## 🔟 Joining Tables (\`INNER JOIN\`)
\`\`\`sql
SELECT employees.name, departments.department_name 
FROM employees
INNER JOIN departments ON employees.department_id = departments.id;
\`\`\`
Retrieves employee names along with their department names.

---

# 🔥 Fun Facts About SQL  
✅ The first commercial **SQL-based database** was **Oracle**, released in 1979.  
✅ SQL is **not case-sensitive** (\`SELECT\` is the same as \`select\`).  
✅ The **ANSI SQL standard** was first published in **1986**.  
✅ **Facebook, Google, and Amazon** rely heavily on SQL databases.  

---

## 🏆 Summary
- SQL is the **standard language** for managing relational databases.
- It was created in the **1970s at IBM** and became the foundation for modern database management.
- SQL supports **CRUD operations, filtering, sorting, joins, and aggregations**.
- It is widely used in web development, data analysis, and enterprise applications.

**Want to master SQL? Practice writing queries! 🚀**
`;