class Vehicle{
    constructor(brand){
        this.brand=brand;
    }
    start(){
        return `${this.brand} is starting Now..`
    }
}


class Car extends Vehicle {
    constructor(brand,model){
        // Call parent constructor
        super(brand);
        this.model=model;
    }

    getDetails(){
        return `${this.brand} ${this.model}`;
    }
}

let mycar= new Car('Toyoto',"camry");
console.log(mycar.start());
console.log(mycar.getDetails());
