import Otter from './core/Otter.js';
import pool from '../model/database.js';

const main = async () => {
  const otter = new Otter();
  otter.configServer({ pool, tableName: 'ottodo_db' });
  const inputArray = await otter.fetchData_dev();
  otter.init(inputArray, {pKey: 'todo_id', sortBy: 'todo_id', groupWith: 'category'});
  console.log(otter)
};

main();
