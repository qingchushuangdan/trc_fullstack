// var count = 0
// function add(){
//     count ++
//     console.log(count);
// }
// add()
// add()
// add()

function add(){
    var num = 0
    function a(){
        console.log(++num);
    }
    return a
}
var result = add()
result()
result()
result()
