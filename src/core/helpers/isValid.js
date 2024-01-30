import isUnique from '../../utils/isUnique.js';
import propExist from '../../utils/propExist.js';

const isValid = (inputArray, inputAttributes) => {
  const pKey = inputAttributes.pKey;

  // Checks if all items in array are 'objects'
  if (inputArray.every((item) => typeof item === 'object')) {
    // Checks if objects have neccessary attributes
    if (
      Object.values(inputAttributes).every((attribute) =>
        propExist(inputArray, attribute)
      )
    ) {
      // Checks if all 'pKeys' are unique
      if (isUnique(inputArray, pKey)) {
        return true;
      }
    }
  } else {
    throw new Error('INVALID INPUTS');
  }
};

export default isValid;
