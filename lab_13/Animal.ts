export default class Animal {
    protected animalName: string;
    protected animalSpeed: number;

    constructor(animalName: string, animalSpeed: number) {
        this.animalName = animalName;
        this.animalSpeed = animalSpeed;
    }

    getAnimalName(): string{
        return this.animalName;
    }

    getAnimalSpeed(): number{
        return this.animalSpeed;
    }
}