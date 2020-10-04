let twoSum = function (nums, target) {
    let hashTable = []; 
    for (let i = 0; i < nums.length; i++) {
        if (hashTable[target - nums[i]] != undefined) {
            return [hashTable[target - nums[i]], i]
        }
        hashTable[nums[i]] = i; 
    }
};
 console.log(twoSum([2,7,11,15],9))