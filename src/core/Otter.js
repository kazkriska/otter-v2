import xerox from '../utils/parsers/xerox.js';
import isValid from './helpers/isValid.js';
import approachLogic from './helpers/approachLogic.js';
import initRedux from './helpers/initRedux.js';
import db from '../../model/requestHandler.js';
import pool from '../../model/database.js';

class Otter {
  constructor() {
    this._inputArray = null;
    this._attributes = { pKey: 'id', groupWith: null, sortBy: null };
    this._otterInstance = this;
    this._state = {
      groupingSchema: null,
      groupedState: null,
      internalState: [],
      rawState: null,
    };
    this._info = {
      hasInitialized: false,
      // hasStateChanged: false,
      latest_changes_sent_to_server: false,
      latest_changes_fetched_from_server: false,
      save_to_local: false,
      fetch_from_local: false,
    };
    this._serverConfig = {
      pool: null,
      tableName: null,
      serverConfigured: false
    };
  }

  async init(inputArray, inputAttributes) {
    const isInputValid = isValid(inputArray, {
      ...this._attributes,
      ...inputAttributes,
    });
    const approach = approachLogic(inputArray);
    if (isInputValid && this._serverConfig.serverConfigured) {
      this.saveInputArray(inputArray);
      this.saveInputAttributes(inputAttributes);
      const groupingSchemaAndState = initRedux(this._otterInstance, approach);
      this.saveGroupingSchemaAndState(groupingSchemaAndState);
      this.generateInternalState(this._state.groupedState);
      this.updatePosOnServer(this._state.internalState);
      this.generateRawState(this._state.internalState);
      this._info.hasInitialized = true;
    } else {
      console.error('Could not initialize Otter');
    }
  }

  saveInputArray(inputArray) {
    this._inputArray = xerox(inputArray); // memory leak prevention
  }

  saveInputAttributes(inputAttributesRaw) {
    const inputAttributes = xerox(inputAttributesRaw); // memory leak prevention
    for (const attr in inputAttributes) {
      this._attributes[attr] = inputAttributes[attr];
    }
  }

  saveGroupingSchemaAndState(groupingSchemaAndStateRaw) {
    const groupingSchemaAndState = xerox(groupingSchemaAndStateRaw); // memory leak prevention
    this._state = { ...this._state, ...groupingSchemaAndState };
  }

  generateInternalState(groupedState) {
    for (const item in groupedState) {
      groupedState[item].forEach((obj) => {
        this._state.internalState.push(obj);
      });
    }
    // this._state.internalState.sort((a, b) => a.id - b.id);
    this._state.internalState.sort((a, b) => a.pos.index - b.pos.index);
  }

  generateRawState(internalState) {
    this._state.rawState = internalState.map(
      (item) => item[this._attributes.pKey]
    );
  }

  updatePosOnServer(internalStateArray) {
    internalStateArray.forEach((item) => {
      // console.log(item)
      db.updatePosForSingleEntry(item);
    });
  }

  configServer({ pool, tableName }) {
    this._serverConfig.pool = pool;
    this._serverConfig.tableName = tableName;
    this._serverConfig.serverConfigured = true
  }

  async fetchData_dev() {
    const data = await this._serverConfig.pool.query(`SELECT * FROM ${this._serverConfig.tableName}`);
    return data.rows;
  }

  /*
  // updateServerTest(data) {
  //   db.updatePosForSingleEntry(data);
  // }

  // async readServerTest() {
  //   const data = await db.readAllEntries();
  //   return data;
  // }
  // async readServerUniqueTest(pKey) {
  //   const data = await db.readSingleEntry(pKey);
  //   return data;
  // }
  */
}

export default Otter;
