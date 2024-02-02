const isUnique = (inputArray, property, countNull ) => {
  const uniqueSet = new Set();

  if (countNull === 'countNull') {
    inputArray = inputArray.filter((item) => item[property] != null);
  }

  for (const item of inputArray) {
    const value = property ? item[property] : item;
    if (uniqueSet.has(value)) {
      // return false;
      throw new Error('Property NOT Unique');
    }
    uniqueSet.add(value);
  }
  return true;
};

export default isUnique;
