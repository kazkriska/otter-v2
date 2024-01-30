const isUnique = (inputArray, property) => {
  const uniqueSet = new Set();

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
