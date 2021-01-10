var majorityElement = function(nums) {
  let item = {}
  let len = nums.length
  let index = nums.length / 3
  let res = []
  for (let i = 0; i < len; i++) {
    if (item.hasOwnProperty(nums[i])) {
      item[nums[i]] ++
    } else {
      item[nums[i]] = 1
    }
  }
  for (let key in item) {
    if (item[key] > index) res.push(key)
  }
  return res
};
console.log(majorityElement([1,1,1,3,3,2,2,2]));