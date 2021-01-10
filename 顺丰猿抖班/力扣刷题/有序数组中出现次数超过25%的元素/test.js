var findSpecialInteger = function(arr) {
  let len = arr.length
  let obj = {}
  for (let i of arr) {
    obj[i] = (!obj[i] ? 1 : ++obj[i])
  }
  
};
console.log(findSpecialInteger([1,2,2,6,6,6,7,10]));
var findSpecialInteger = function(arr) {
  let len = arr.length
  let obj = {}
  for(let i of arr){
      obj[i] = (!obj[i] ? 1 : ++obj[i])
  }

  for(let i = 0; i < len; i++){
      if(obj[arr[i]] > len/4){
          return arr[i]
      }
  }
};