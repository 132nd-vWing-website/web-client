/**
 * @description Determines if an array contains one or more items from another array
 * @param {array} haystack -> The array to search
 * @param {array} needles -> The array providing items to check for in the heystack
 * @return {boolean} true|false if haystack contains at least one item from needles
 */
const findOne = (haystack, needles) => {
  return needles.some(v => haystack.includes(v));
};

export default findOne;
