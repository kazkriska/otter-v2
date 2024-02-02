import { readAll, readUnique, update } from './queries.js';

const db = {
  createSingleEntry: (data) => {
    create(data);
  },
  readAllEntries: () => {
    const data = readAll();
    return data;
  },
  readSingleEntry: (pKey) => {
    const data = readUnique(pKey);
    return data;
  },
  updatePosForSingleEntry: (data) => {
    update(data);
  },
};

export default db;
