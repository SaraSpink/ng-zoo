import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'


@Component({
  selector: 'animal-list',
  template: `
<label>Age Filter</label>
<select (change)="onChange($event.target.value)">
  <option value="allAnimals"selected="selected">All Animals</option>
  <option value="twoAndUnder">Young Animals</option>
  <option value="overTwo">Mature Animals</option>
</select>

  <table class="table">
    <thead>
      <tr>
        <th>Species</th>
        <th>Name</th>
        <th>Diet</th>
        <th>Location</th>
        <th>Number of caretakers</th>
        <th>Sex</th>
        <th>Likes</th>
        <th>Dislikes</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    <tr *ngFor='let animal of childAnimalList | age:filterByAge'>
      <td>{{animal.species}}</td>
      <td>{{animal.name}}</td>
      <td>{{animal.diet}}</td>
      <td>{{animal.location}}</td>
      <td>{{animal.caretakers}}</td>
      <td>{{animal.sex}}</td>
      <td>{{animal.likes}}</td>
      <td>{{animal.dislikes}}</td>
      <td><button (click)="editButtonHasBeenClicked(animal)">Edit Animal</button></td>
    </tr>
    </tbody>
  </table>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit, Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
