class Animal{
    //some other methods and variables here
sound(){
    return "Some Sound";
}
}

class Dinosaur extends Animal{
    sound(){
        return "Save us from meteor";
    }
        //some other methods and variables here

}

class Mammoth{
        //some other methods and variables here

    sound(){
        return "save us too ...please!";
    }
}

let myBigPet = new Dinosaur();
let myPet = new Mammoth();

console.log(myBigPet.sound()) //Save us from meteor- Dinasaur
console.log(myPet.sound())   //save us too ...please!- Mammoth