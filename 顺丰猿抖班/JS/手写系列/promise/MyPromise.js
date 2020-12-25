// 至关重要

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []

  function resolve(value) {
    if (that.state === PENDING) {
      that.state = RESOLVED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  function reject(value) {
    if (that.state === PENDING) {
      that.state = REJECTED
      that.value = value
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}


MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}

function a() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve('ok')
      // reject('err')
    }, 1000)
  })
}
function b() {
  setTimeout(() => {
    console.log('bbbb');
  })
}
a().then(b)
