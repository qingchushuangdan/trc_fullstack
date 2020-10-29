var fourSum = function(nums, target) {
    let i,
    j,
    k,
    l,
    len = nums.length;
    for(i = 0; i < len - 3; i++){
        for(j = i + 1; j < len - 2; j++){
            for(k = j + 1; k < len - 1; k++){
                for(l = k + 1; l < len; l++){
                    if(nums[i] + nums[j] + nums[k] + nums[l] == target){
                        return [nums[i],nums[j],nums[k],nums[l]];
                    }

                }
            }
        }
    }
        
};
console.log(fourSum([1,0,-1,0,-2,2]),0);