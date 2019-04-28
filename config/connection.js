const mysql = require('mysql');

const localConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'burgers_db'
}

const connection = process.env.JAWSDB_URL ? mysql.createConnection(process.env.JAWSDB_URL) : mysql.createConnection(localConfig);

connection.connect(err => {
  err ? console.error('Error: ' + err.stack) : console.log('Connected as ' + connection.threadId);
})


module.exports = connection;