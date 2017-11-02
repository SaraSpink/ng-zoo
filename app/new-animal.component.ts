import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="well">
    <h3>Enter a new animal:</h3>
  </div>

  <div class="well">
    <table class="table">
      <thead>
        <th>Enter Animal's Name</th>
        <th>Enter Species</th>
        <th>Enter Animal's Age</th>
      </thead>
      <tbody>
        <td><input #newAnimalName></td>
        <td><input #newAnimalSpecies></td>
        <td><input #newAnimalAge></td>
      </tbody>

      <thead>
        <th>Number of caretakers</th>
        <th>Location</th>
        <th>Sex</th>
      </thead>
      <tbody>
        <td><input #newAnimalCaretakers></td>
        <td><input #newAnimalLocation></td>
        <td><input #newAnimalSex></td>
      </tbody>

      <thead>
        <th placeholder="Carnivore or Herbivore">Diet</th>
        <th>Likes</th>
        <th>Dislikes</th>
      </thead>
      <tbody>
        <td><input #newAnimalDiet></td>
        <td><input #newAnimalLikes></td>
        <td><input #newAnimalDislikes></td>
      </tbody>

      <button (click)="submitForm(
        newAnimalSpecies.value,
        newAnimalName.value,
        newAnimalAge.value,
        newAnimalDiet.value,
        newAnimalLocation.value,
        newAnimalCaretakers.value,
        newAnimalSex.value,
        newAnimalLikes.value,
        newAnimalDislikes.value);
        newAnimalSpecies.value='';
        newAnimalName.value='';
        newAnimalAge.value=null;
        newAnimalDiet.value='';
        newAnimalLocation.value='';
        newAnimalCaretakers.value=null;
        newAnimalSex.value='';
        newAnimalLikes.value='';
        newAnimalDislikes.value='';
        "
        class="btn btn-info">Add Animal</button>
    </table>
  </div>
  `
})

export class NewAnimalComponent{
  newAnimal: string = '';
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    let newAnimalToAdd: Animal = new Animal(species,name,age,diet,location,caretakers,sex,likes,dislikes);
    console.log(newAnimalToAdd);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
