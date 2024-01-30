const posRedux = (groupedState, approach) => {
  let counter = 0;
  switch (approach) {
    case 'none have pos': {
      // Adds pos (rpos & index) property to all items in groupedState
      for (const item in groupedState) {
        groupedState[item].forEach((value, index, groupArray) => {
          groupArray[index].pos = {
            rpos: Number(item) + (index + 1) / 10,
            index: counter,
          };
          counter += 1;
        });
      }
      return groupedState;
    }
    case 'some have pos': {
      // Adds pos (rpos & index) property to all items in groupedState
      for (const item in groupedState) {
        groupedState[item].forEach((value, index, groupArray) => {
          groupArray[index].pos = {
            rpos: Number(item) + (index + 1) / 10,
            index: counter,
          };
          counter += 1;
        });
      }
      return groupedState;
    }
    case 'all have pos': {
       // Adds pos (rpos & index) property to all items in groupedState
       for (const item in groupedState) {
        groupedState[item].forEach((value, index, groupArray) => {
          groupArray[index].pos = {
            ...groupArray[index].pos,
            index: counter,
          };
          counter += 1;
        });
      }
      return groupedState;
    }
    default: {
      return groupedState;
    }
  }
};

export default posRedux;
