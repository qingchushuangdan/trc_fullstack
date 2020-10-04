//函数自声明
// 类型？ Object
// function twoSum(){

// }

//函数表达式
// twoSum 常量 匿名表达式 
// undefined 变量的值未定义
// 变量 值
// let twoSum ;
// console.log(twoSum);
// 函数是功能的集合，代码的集合，为了完成一个单独的功能
// 数据可视化 webGL
/**
 * leetcode 1 两数相加
 * @param {Array} nums 
 * @param {integer} target 
 * @return Array[]
 */
const twoSum = function(nums,target){
    // 怎么实现
    // 暴力一下
    // 两重循环可以搞定
    let i,
    j,
    len = nums.length;
    
    // 两重循环
    for (i = 0; i < len; i++){
    for(j = i + 1; j < len; j++){
        //机器代码
        if(nums[i] + nums[j] == target){
            return [i, j];
        }

    }
    }
    return [];
}
console.log(twoSum([2,7,11,15],9));