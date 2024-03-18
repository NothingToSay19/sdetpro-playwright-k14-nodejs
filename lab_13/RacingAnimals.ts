import Animal from "./Animal";

let animalSpeed: any = [];
let maxSpeed: number = 0;
let winner: string = "";
let index: number = 0;
let animalName: any = [];

export default class RacingAnimals {
    static animalSpeed(animalList: Animal []) {
        animalList.forEach(animal => {
            animalSpeed.push(animal.getAnimalSpeed());
            animalName.push(animal.getAnimalName());
        });
        for(let i = 0; i < animalSpeed.length; i++){
            if(animalSpeed[i] >= maxSpeed) {
                maxSpeed = animalSpeed[i];
                index = i;
            }
        }
        for(let i = 0; i < animalName.length; i++){
            if(index === i) {
                winner = animalName[i];
            }
        }
        console.log(animalSpeed);
        console.log(animalName);
        // console.log(maxSpeed);
        // console.log(index);
        // console.log(winner);
        console.log(`The winner is: ${winner} with max Speed at ${maxSpeed}`);
    }

}
