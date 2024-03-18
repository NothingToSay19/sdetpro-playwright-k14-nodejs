import Animal from "./Animal";

export default class Tiger extends  Animal {
    getAnimalSpeed(): number{
        return Math.floor(Math.random() * 100) + 1;
    }

    getAnimalName(): string{
        return super.getAnimalName();
    }
}