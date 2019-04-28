const connection = require('./connection');

const orm = {
  selectAll: function (tableName, callback) {
    connection.query(
      'SELECT * FROM ??',
      tableName, (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  },
  insertOne: function (tableName, valueObj, callback) {
    connection.query(
      'INSERT INTO ?? SET ?',
      [tableName, valueObj], (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  },
  updateOne: function (tableName, valueObj, condition, callback) {
    connection.query(
      'UPDATE ?? SET ? WHERE ?',
      [tableName, valueObj, condition], (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  },
  viewJoined: function (table1, table2, conditions, callback) {
    connection.query(
      'SELECT * FROM ??, ?? WHERE ? AND ?? = ??',
      [table1,table2, ...conditions], (err, data) => {
        if (err) callback(err);
        else { callback(data) };
      }
    )
  },
  insertMultiple: function (tableName, columns, values, callback) {
    connection.query(
      'INSERT INTO ?? (??) VALUES ?',
      [tableName, columns, values], (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  }
}

module.exports = orm;