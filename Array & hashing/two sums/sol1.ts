function twoSum(nums: number[], target: number): number[] {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in hashmap) {
      return [i, hashmap[diff]];
    }

    hashmap[nums[i]] = i;
  }

  return [];
}
