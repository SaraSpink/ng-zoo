import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:
  `
<div class="container">
  <h1>{{currentFocus}}</h1>

  <div id="animalList" class= "well">
    <h3>Animals</h3>

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
  </div>

  <edit-animal [childSelectedAnimal]= "selectedAnimal" (submitButtonClickedSender)="finishedEditing()"></edit-animal>
  <new-animal (newAnimalrSender)= "addAnimal($event)"></new-animal>
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
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
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
