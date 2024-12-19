import mysql from "mysql2";
const mysql2 = require("mysql2/promise");
import * as dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection({
  host: process.env.MY_SQL_DB_HOST,
  user: process.env.MY_SQL_DB_USER,
  password: process.env.MY_SQL_DB_PASSWORD,
  database: process.env.MY_SQL_DB_DATABASE,
  port: 3306,
});

// Connect to server
export const pool = mysql2.createPool({
  host: process.env.MY_SQL_DB_HOST,
  user: process.env.MY_SQL_DB_USER,
  password: process.env.MY_SQL_DB_PASSWORD,
  database: process.env.MY_SQL_DB_DATABASE,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
});
