const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
    const that = this
    that.state = PENDING
    that.value = null  // resolve reject 接收的值
    that.resolvedCallbacks = []  // .then(() => {})
    that.rejectedCallbacks = []

    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => {
                return cb(that.value)
            })
        }
    }

    function reject(error) {
        if (that.state = PENDING) {
            that.state = REJECTED
            that.value = error
            that.rejectedCallbacks.map(cb => {
                return cb(that.value)
            })
        }
    }

    try {
        fn(resolve, reject) 
    } catch(error) {
        reject(error)
    }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if (that.state = RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state = REJECTED) {
        onRejected(that.value)
    }
}

let p = new MyPromise()  // => {state: 'pending', value: null}
// p.resolve()