class smartphone{
    constructor(brand){
        this.brand=brand;
    }

    turnOn(){
        return `${this.brand} is powering on...`;
    }

    
    #turnOff(){
        return `Turning off...`;
    }
}

let phone= new smartphone("OnePlus");
console.log(phone.turnOn());
console.log(phone.turnOff());