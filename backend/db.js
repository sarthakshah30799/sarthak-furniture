const mysql = require("mysql2");

const config = require("./db.config");

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: config.db.HOST,
    user: config.db.USER,
    password: config.db.PASSWORD,
    database: config.db.DB,
  });
  const results = await connection.execute(sql, params);
  console.log("result is", results);
  return results;
}

module.exports = {
  query,
};
