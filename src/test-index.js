import Otter from './core/Otter.js';
import pool from '../model/database.js';

const arr1 = [
  { otter_id: 1, category: 'A' },
  { otter_id: 2, category: 'B' },
  { otter_id: 3, category: 'A' },
  { otter_id: 4, category: 'C' },
];
const arr2 = [
  { otter_id: 1, category: 'A', pos: { rpos: 1.1, index: 0 } },
  { otter_id: 2, category: 'B', pos: { rpos: 2.1, index: 2 } },
  { otter_id: 3, category: 'A', pos: { rpos: 1.2, index: 1 } },
  { otter_id: 4, category: 'C', pos: { rpos: 3.1, index: 3 } },
];

const arr3 = [
  { otter_id: 8, category: 'B' },
  { otter_id: 6, category: 'A' },
  { otter_id: 14, category: 'C' },
  { otter_id: 4, category: 'C' },
  { otter_id: 2, category: 'B' },
  { otter_id: 5, category: 'B' },
  { otter_id: 12, category: 'B' },
  { otter_id: 1, category: 'A' },
  { otter_id: 7, category: 'C' },
  { otter_id: 9, category: 'A' },
  { otter_id: 11, category: 'A' },
  { otter_id: 3, category: 'A' },
  { otter_id: 13, category: 'A' },
  { otter_id: 10, category: 'C' },
  { otter_id: 15, category: 'B' },
];

const arr3_1 = [
  { otter_id: 8, category: 'B' },
  { otter_id: 1, category: 'A' },
  { otter_id: 4, category: 'C' },
  { otter_id: 2, category: 'B', pos: { rpos: 7.1} },
  { otter_id: 5, category: 'B' },
  { otter_id: 12, category: 'B' },
  { otter_id: 6, category: 'A', pos: { rpos: 8.3} },
  { otter_id: 7, category: 'C' },
  { otter_id: 14, category: 'C', pos: { rpos: 6.1 } },
  { otter_id: 9, category: 'A' },
  { otter_id: 11, category: 'A' },
  { otter_id: 3, category: 'A' },
  { otter_id: 13, category: 'A' },
  { otter_id: 10, category: 'C' },
  { otter_id: 15, category: 'B' },
];

const arr4 = [
  { otter_id: 1, category: 'A', pos: { rpos: 1.1, index: 0 } },
  { otter_id: 2, category: 'B', pos: { rpos: 2.1, index: 1 } },
  { otter_id: 3, category: 'A', pos: { rpos: 1.2, index: 2 } },
  { otter_id: 4, category: 'C', pos: { rpos: 3.1, index: 3 } },
  { otter_id: 5, category: 'B', pos: { rpos: 2.2, index: 4 } },
  { otter_id: 6, category: 'A', pos: { rpos: 1.3, index: 5 } },
  { otter_id: 7, category: 'C', pos: { rpos: 3.2, index: 6 } },
  { otter_id: 8, category: 'B', pos: { rpos: 2.3, index: 7 } },
  { otter_id: 9, category: 'A', pos: { rpos: 1.4, index: 8 } },
  { otter_id: 10, category: 'C', pos: { rpos: 3.3, index: 9 } },
  { otter_id: 11, category: 'A', pos: { rpos: 1.5, index: 10 } },
  { otter_id: 12, category: 'B', pos: { rpos: 2.4, index: 11 } },
  { otter_id: 13, category: 'A', pos: { rpos: 1.6, index: 12 } },
  { otter_id: 14, category: 'C', pos: { rpos: 3.4, index: 13 } },
  { otter_id: 15, category: 'B', pos: { rpos: 2.5, index: 14 } },
];

const testOtter = new Otter();
testOtter.configServer({ pool, tableName: 'otter_db' });
testOtter.init(arr3_1, { pKey: 'otter_id', groupWith: 'category', sortBy: 'otter_id' });

console.log(testOtter);
// console.log(testOtter._state);

