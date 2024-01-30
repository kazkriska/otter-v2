const customSort = (inputArray, property) => {
  inputArray.sort((a, b) => a[property] - b[property]);
};

export default customSort;
