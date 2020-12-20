var majorityElement = function(nums) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
      if(!map.has(nums[i])) {
          map.set(nums[i], 1)
      } else {
          map.set(nums[i], 1 + map.get(nums[i]))
      }
      if(map.get(nums[i]) > nums.length / 2) {
          return nums[i];
      }
  }
  return -1;
};
console.log(majorityElement([2, 2, 1, 4, 5, 3, 2, 3]));