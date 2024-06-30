/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const hash = {};

  for (let num of nums) {
    if (hash[num]) {
      hash[num]++;
      if (hash[num] >= 2) return true;
    } else {
      hash[num] = 1;
    }
  }

  return false;
};
