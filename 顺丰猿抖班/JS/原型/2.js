
Car.prototype.name = 'BMW'
Car.prototype.long = 4900
Car.prototype.height = 1400

function Car(color, owner) {
    this.color = color
    this.owner = owner
    // this.name = 'BMW'
    // this.long = 4900
    // this.height = 1400
}
var car = new Car('red', 'tingting')
var car1 = new Car('green', 'shishi')

console.log(car.name);
console.log(car1.long);