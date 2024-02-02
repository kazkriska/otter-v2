import customSort from '../../utils/customSort.js';
import xerox from '../../utils/parsers/xerox.js';
import posRedux from './posRedux.js';

const initRedux = (otterInstance, approach) => {
  const state = {
    groupingSchema: {},
    groupedState: {},
  };
  const { _inputArray, _attributes } = otterInstance;
  switch (approach) {
    case 'none have pos': {
      // Generating the GroupingSchema
      const groupsArray = [
        ...new Set(_inputArray.map((item) => item[_attributes.groupWith])),
      ];
      groupsArray.forEach((item, index) => {
        state.groupingSchema[item] = (index + 1).toString();
      });
      groupedStateSetter(state, _inputArray, _attributes, approach);
      // console.log(state.groupedState);
      return state;
    }

    case 'all have pos': {
      groupingSchemaSetterFromExisting(_inputArray,_attributes, state);
      groupedStateSetter(state, _inputArray, _attributes, approach);
      // console.log(state.groupedState['1']);
      return state;
    }
    case 'some have pos': {
      groupingSchemaSetterFromExisting(_inputArray,_attributes, state);
      groupedStateSetter(state, _inputArray, _attributes, approach);
      // console.log(state.groupedState['1']);
      return state;
    }
    default: {
      return state;
    }
  }
};
export default initRedux;

function groupingSchemaSetterFromExisting(_inputArray,_attributes, state) {
  const filteredPosArray = _inputArray
    .filter((item) => item.pos)
    .map((item) => item);
  const groupNumberArray = [
    ...new Set(
      filteredPosArray.map(
        (item) => `${item[_attributes.groupWith]}-${item.pos.rpos.toString().split('.')[0]}`
      )
    ),
  ];
  // Setting GroupingSchema (unSorted)
  groupNumberArray.forEach((item) => {
    const [group, groupNum] = item.split('-');
    state.groupingSchema[group] = groupNum.toString();
  });
  // Final GroupingSchema after sorting //? Necessary tho?
  state.groupingSchema = Object.fromEntries(
    Object.entries(state.groupingSchema).sort(([, a], [, b]) => a - b)
  );
}

function groupedStateSetter(state, _inputArray, _attributes, approach) {
  // Generating working-copy of GroupedState
  state.groupedState = xerox(
    Object.groupBy(_inputArray, (item) => item[_attributes.groupWith])
  );
  // Changing keys of groupedState based on Schema
  for (const item in state.groupedState) {
    state.groupedState[state.groupingSchema[item]] = state.groupedState[item];
    // Deleting old key
    delete state.groupedState[item];
  }
  // Sorting the groups based on _attributes.sortBy
  if (approach === 'none have pos') {
    for (const item in state.groupedState) {
      customSort(state.groupedState[item], _attributes.sortBy);
    }
  }
  // Final GroupState
  state.groupedState = posRedux(state.groupedState, approach);
}
