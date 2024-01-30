import Otter from './core/Otter.js';
import testData from '../data/testData_unsorted.js';
import testDataTodo from '../data/testData_sorted.js';


const arr1 = [
  { id: 1, cat: 'A' },
  { id: 2, cat: 'B' },
  { id: 3, cat: 'A' },
  { id: 4, cat: 'C' },
];
const arr2 = [
  { id: 1, cat: 'A', pos: { rpos: 1.1, index: 0 } },
  { id: 2, cat: 'B', pos: { rpos: 2.1, index: 2 } },
  { id: 3, cat: 'A', pos: { rpos: 1.2, index: 1 } },
  { id: 4, cat: 'C', pos: { rpos: 3.1, index: 3 } },
];

const arr3 = [
  { id: 14, cat: 'C' },
  { id: 4, cat: 'C' },
  { id: 2, cat: 'B' },
  { id: 8, cat: 'B' },
  { id: 5, cat: 'B' },
  { id: 12, cat: 'B' },
  { id: 6, cat: 'A' },
  { id: 1, cat: 'A' },
  { id: 7, cat: 'C' },
  { id: 9, cat: 'A' },
  { id: 11, cat: 'A' },
  { id: 3, cat: 'A' },
  { id: 13, cat: 'A' },
  { id: 10, cat: 'C' },
  { id: 15, cat: 'B' },
];

const arr3_1 = [
  { id: 8, cat: 'B' },
  { id: 1, cat: 'A' },
  { id: 4, cat: 'C' },
  { id: 2, cat: 'B', pos: { rpos: 2.1, index: 4 } },
  { id: 5, cat: 'B' },
  { id: 12, cat: 'B' },
  { id: 6, cat: 'A', pos: { rpos: 3.3, index: 11 } },
  { id: 7, cat: 'C' },
  { id: 14, cat: 'C', pos: { rpos: 1.1, index: 0 } },
  { id: 9, cat: 'A' },
  { id: 11, cat: 'A' },
  { id: 3, cat: 'A' },
  { id: 13, cat: 'A' },
  { id: 10, cat: 'C' },
  { id: 15, cat: 'B' },
];


const arr4 = [
  { id: 1, cat: 'A', pos: { rpos: 1.1, index: 0 } },
  { id: 2, cat: 'B', pos: { rpos: 2.1, index: 1 } },
  { id: 3, cat: 'A', pos: { rpos: 1.2, index: 2 } },
  { id: 4, cat: 'C', pos: { rpos: 3.1, index: 3 } },
  { id: 5, cat: 'B', pos: { rpos: 2.2, index: 4 } },
  { id: 6, cat: 'A', pos: { rpos: 1.3, index: 5 } },
  { id: 7, cat: 'C', pos: { rpos: 3.2, index: 6 } },
  { id: 8, cat: 'B', pos: { rpos: 2.3, index: 7 } },
  { id: 9, cat: 'A', pos: { rpos: 1.4, index: 8 } },
  { id: 10, cat: 'C', pos: { rpos: 3.3, index: 9 } },
  { id: 11, cat: 'A', pos: { rpos: 1.5, index: 10 } },
  { id: 12, cat: 'B', pos: { rpos: 2.4, index: 11 } },
  { id: 13, cat: 'A', pos: { rpos: 1.6, index: 12 } },
  { id: 14, cat: 'C', pos: { rpos: 3.4, index: 13 } },
  { id: 15, cat: 'B', pos: { rpos: 2.5, index: 14 } },
];

const testOtter = new Otter();
// console.log(testOtter)

// testOtter.init(arr3, { groupWith: 'cat', sortBy: 'id' });
// testOtter.init(arr3_1, { groupWith: 'cat', sortBy: 'id' });
testOtter.init(testDataTodo, { groupWith: 'category', sortBy: 'todo_id', pKey: 'todo_id'});

console.log(testOtter);
// console.log(testOtter._state.rawState);

