function Archiver() {
  value = null;
  let result = [];
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行get操作');
      return value;
    },
    set: function (newValue) {
      console.log('执行了set操作');
      value = newValue;
      result.push({val:value})
    }
  })
  this.getArchiver = function () {
    return result;
  }
}

let arc = new Archiver();
console.log(arc.num); //get
arc.num = 11; // set
arc.num = 22; //  set
console.log(arc.getArchiver());


// let obj = {},value = null;
// Object.defineProperty(obj, 'num', {
//   get: function () {
//     console.log('执行get操作');
//     return value;
//   },
//   set: function (newValue) {
//     console.log('执行了set操作');
//     value = newValue;
//   }
// })
// obj.num = 2;
// console.log(obj.num);