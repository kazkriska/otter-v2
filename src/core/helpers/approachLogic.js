import isUnique from '../../utils/isUnique.js';
import propExist from '../../utils/propExist.js';

const approachLogic = (inputArray) => {
  if (inputArray.every((item) => !item.pos)) {
    return 'none have pos';
  } else {
    const posArray = inputArray
      .filter((item) => item.pos)
      .map((item) => item.pos);
    if (
      propExist(posArray, 'rpos') &&
      isUnique(posArray, 'rpos') &&
      propExist(posArray, 'index') &&
      isUnique(posArray, 'index')
    ) {
      if (posArray.length === inputArray.length) {
        return 'all have pos';
      }
      else if (posArray.length < inputArray.length) {
        return 'some have pos'
      } else {
        throw new Error('Invalid Approach')
      }
    }
  }
};

export default approachLogic;
