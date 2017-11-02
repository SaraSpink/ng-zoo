import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:
  `
<div class="container">
  <h1>{{currentFocus}}</h1>

  <div id="animalList" class= "well">
    <h3>Animals</h3>

    <animal-list [childAnimalList]="masterAnimalList" (editButtonHasBeenClickedSender)="editAnimal($event)"></animal-list>
  </div>

  <animal-edit [childSelectedAnimal]="selectedAnimal" (submitButtonClickedSender)="finishedEditing()"></animal-edit>

  <new-animal (newAnimalSender)= "addAnimal($event)"></new-animal>
</div>
 `

})

export class AppComponent {
  currentFocus: string = 'Zoo'
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Timber Wolf', 'Susan', 8, 'Carnivore', 'Dark Forest', 3, 'female', 'howling at the moon', 'cheese'),
    new Animal('Hippopotamus', 'Mac', 4, 'Herbivore', 'Sub-Sahara', 5, 'male', 'beach balls', 'boats'),
    new Animal('Three-toed Sloth', 'Harry', 2, 'Herbivore', 'Rain Forest', 1, 'male', 'cucumbers', 'ghosts'),
  ];

  editAnimal(clickedAnimal){
    console.log("edit animal here")
    console.log(clickedAnimal)
    debugger;
    this.selectedAnimal = clickedAnimal;
    console.log(this.selectedAnimal)
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    console.log("im here");
    console.log(newAnimalFromChild);
    this.masterAnimalList.push(newAnimalFromChild);
    console.log(this.masterAnimalList);
  }

}

// Species: "Northwest Black Tailed Deer"
// Name: "Tinkerbell"
// Age: 8
// Diet: "Herbivore"
// Location: "Northern Trail"
// Caretakers: 2
// Sex: "Female"
// Likes: "Delicate roots and leaves"
// Dislikes: "Loud Noises"
