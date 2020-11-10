let arr = []

// arr instanceof Array

function instance_of(L, R) {// []
    L = L.__proto__ // Array.prototype
    let O = R.prototype
    while(true) {
        if (L == null) return false
        if (O === L) return true
        L = L.__proto__    // Array.prototype.__proto__ == Object.prototype //null
    }
}
console.log(instance_of(arr, Array));