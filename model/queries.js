import pool from './database.js';

const tableName = 'ottodo_db';

export const readAll = async () => {
  try {
    let queryString = `SELECT * FROM ${tableName}`;
    const result = await pool.query(queryString);
    // await pool.end()
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};

export const readUnique = async (pKey) => {
  try {
    let queryString = `SELECT * FROM ${tableName} WHERE todo_id = $1`;
    let queryValues = [pKey];
    const result = await pool.query(queryString, queryValues);
    return result.rows[0] ? result.rows : new Error('No data found');
  } catch (error) {
    console.error(error);
  }
};

export const update = async (data) => {
  let { todo_id, pos } = data;

  // Check if the "pos" column exists in the table
  const posColumnExists = await checkColumnExists(tableName, 'pos');

  if (!posColumnExists) {
    // If the "pos" column doesn't exist, add it to the table
    await addColumnToTable(tableName, 'pos', 'json'); // Replace 'your_data_type' with the actual data type
  }

  // Now proceed with the UPDATE operation
  pos = JSON.stringify(pos);
  let queryString = `UPDATE ${tableName} SET pos = $1 WHERE todo_id = $2`;
  let queryValues = [pos, todo_id];

  try {
    const result = await pool.query(queryString, queryValues);
    // await pool.end()
  } catch (error) {
    console.error(error);
  }
};

// Function to check if a column exists in a table
const checkColumnExists = async (tableName, columnName) => {
  const result = await pool.query(
    'SELECT column_name FROM information_schema.columns WHERE table_name = $1 AND column_name = $2',
    [tableName, columnName]
  );
  return result.rows.length > 0;
};

// Function to add a column to a table
const addColumnToTable = async (tableName, columnName, dataType) => {
  const alterQuery = `ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${dataType}`;
  try {
    await pool.query(alterQuery);
  } catch (error) {
    // console.error('Error adding column:', error);
  }
};


// export const create = async (data) => {
//   // Renaming excepting
//   let { id, cat, pos } = data;
//   pos = JSON.stringify(pos);
//   let queryString =
//     'INSERT INTO otter_db (otter_id, category, pos) VALUES ($1, $2, $3)';
//   let queryValues = [id, cat, pos];
//   try {
//     const result = await pool.query(queryString, queryValues);
//     // await pool.end()
//   } catch (error) {
//     console.error(error);
//   }
// };