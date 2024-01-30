const propExist = (inputArray, property) => {
  return inputArray.every((item) => {
    // Checks if property exists, excluding cases where property has a value of 0
    if (item[property] || item[property] === 0 ) {
      return true;
    } else {
        throw new Error('Property Doesnt Exist')
    }
  });
};

export default propExist;
