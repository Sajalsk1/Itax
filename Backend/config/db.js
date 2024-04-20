const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost', // Change to your MySQL host
  user: 'root', // Change to your MySQL user
  password: 'Sajal@123', // Change to your MySQL password
  database: 'itaxAPI', // Change to your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Replace 'YOUR_PAN_NUMBER' with the actual PAN number you want to search for

const panNumberToSearch = 'YOUR_PAN_NUMBER';

const query = 'SELECT * FROM PanCard WHERE pan_number = ?';

connection.query(query, [panNumberToSearch], (err, results) => {
  if (err) {
    console.error('Error executing SQL query:', err);
    return;
  }

  console.log('Query result:', results);

  // You can process the results here
});

connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
  }
  console.log('MySQL connection closed');
});
