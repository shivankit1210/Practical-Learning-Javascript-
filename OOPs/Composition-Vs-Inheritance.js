//In this Composition example, the Car class contains an instance of the MusicPlayer class. 
//The relationship is a "has-a" relationship, meaning that a Car "has a" MusicPlayer.

// Class representing a Music Player
class MusicPlayer {
    constructor() {
        this.song = '';
    }

    playMusic(song) {
        this.song = song;
        return `Playing "${this.song}" on the music player.`;
    }

    stopMusic() {
        return `Stopping the music.`;
    }
}

// Class representing a Car, which "has a" MusicPlayer
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.musicPlayer = new MusicPlayer(); // Car "has-a" MusicPlayer
    }

    // Method to describe the car
    getDetails() {
        return `This car is a ${this.brand} ${this.model}.`;
    }

    playCarMusic(song) {
        return this.musicPlayer.playMusic(song); // Using the MusicPlayer's method
    }

    stopCarMusic() {
        return this.musicPlayer.stopMusic(); // Using the MusicPlayer's method
    }
}

const myCar = new Car('Tata', 'XUV');
console.log(myCar.getDetails());               // "This car is a Tata XUV."
console.log(myCar.playCarMusic('Shape of You')); //  "Playing 'Shape of You' on the music player."
console.log(myCar.stopCarMusic());             //  "Stopping the music."


//In this inheritance example, Dog is a subclass that inherits from the Animal class. 
//The relationship is an "is-a" relationship, meaning that a Dog "is an" Animal.

// Superclass (Animal)
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        return `${this.name} is making a sound.`;
    }
}

// Subclass (Dog) inherits from Animal
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call the parent constructor
        this.breed = breed; 
    }

    // Method specific to Dog
    bark() {
        return `${this.name} is barking!`;
    }
}

const myDog = new Dog('Buddy', 5, 'Golden Retriever');
console.log(myDog.makeSound());  // Buddy is making a sound.
console.log(myDog.bark());       // Buddy is barking!

