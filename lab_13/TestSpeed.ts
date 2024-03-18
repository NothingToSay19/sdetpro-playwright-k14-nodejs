//Models (OO)
import RacingAnimals from "./RacingAnimals";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const dog = new Dog("Dog" , 0);
const horse = new Horse("Horse", 0);
const tiger = new Tiger("Tiger", 0);

//Usage Controller
RacingAnimals.animalSpeed([dog, horse, tiger]);

