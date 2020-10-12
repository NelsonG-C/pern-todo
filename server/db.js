const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "46pxj?nm2q",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
