class car {
  constructor(brand, model) {
    this.brand = brand; //public
    let speed = 0; //private(closure)
    //public method
    this.getDetails = function () {
      return `${this.brand} ${model}`;
    };
    //private method
    this.accelerate = function (amout) {
      speed += amout;
      return `speed is now ${speed}km/hr`;
    };
  }

  //public method to access speed
  increaseSpeed(amout) {
    return this.accelerate(amout);
  }
}

let mycar= new car('tata','XUV');
console.log(mycar.getDetails());
console.log(mycar.increaseSpeed(30));
