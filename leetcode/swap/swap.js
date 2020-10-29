const swap = function(nums){
    let k = 0;
    for (let i = 0; i<nums.length; i++){
       if(nums[i]){
           nums[k++] = nums[i];            
    }           
}   
    for(let i = k; i < nums.length; i++){
        nums[k++] = 0;        
    }  
}
console.log(swap([0,1,0,3,12]));

