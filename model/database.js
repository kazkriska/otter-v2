import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: 'kashish',
  host: 'localhost',
  database: 'kashish',
  password: 'password',
  port: 5432,
});


export default pool;
