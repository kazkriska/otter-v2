import xerox from '../utils/parsers/xerox.js';
import isValid from './helpers/isValid.js';
import approachLogic from './helpers/approachLogic.js';
import initRedux from './helpers/initRedux.js';

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
  }

  init(inputArray, inputAttributes) {
    const isInputValid = isValid(inputArray, {
      ...this._attributes,
      ...inputAttributes,
    });
    const approach = approachLogic(inputArray);
    if (isInputValid) {
      this.saveInputArray(inputArray);
      this.saveInputAttributes(inputAttributes);
      const groupingSchemaAndState = initRedux(this._otterInstance, approach);
      this.saveGroupingSchemaAndState(groupingSchemaAndState);
      this.generateInternalState(this._state.groupedState);
      this.generateRawState(this._state.internalState)
      // console.log(this._state);
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
    this._state.rawState = internalState.map((item) => item[this._attributes.pKey]);
  }

}

export default Otter;
