// @annotation
// class Myclass {

// }
// function annotation(target) {
//   target.annotation = true;
// }



class Myclass {
  @readonly
  @unenumrable
  method() {
    
  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function unenumrable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}