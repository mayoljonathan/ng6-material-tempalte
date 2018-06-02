import { Injectable } from '@angular/core';

// Models
import { Dog } from "../models"; 

@Injectable()
export class DogService {
    dogs: Dog[] = [];
    
    constructor() {
        var shiba: Dog = new Dog(
            "Shiba Inu", 
            "https://material.angular.io/assets/img/examples/shiba1.jpg", 
            `Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`
        );

        var doge:Dog = new Dog(
            "Doge", 
            "https://material.angular.io/assets/img/examples/shiba1.jpg", 
            `Doge is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`
        );

        var cj:Dog = new Dog(
            "CJ", 
            "https://material.angular.io/assets/img/examples/shiba1.jpg", 
            `CJ is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.`
        );

        this.dogs.push(shiba,doge,cj);
    }
    
    getAllDogs() {
        return this.dogs;
    }
    
}