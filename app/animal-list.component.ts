import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'


@Component({
  selector: 'animal-list',
  template: `
<label>Age Filter</label>
<select (change)="onChange($event.target.value)">
  <option value="allAnimals">All Animals</option>
  <option value="young">Young Animals</option>
  <option value="mature">Mature Animals</option>

</select>

  <table class="table">
    <thead>
      <tr>
        <th>Species</th>
        <th>Name</th>
        <th>Age</th>
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
    <tr *ngFor='let listAnimal of childAnimalList | age:filterByAge'>
      <td>{{listAnimal.species}}</td>
      <td>{{listAnimal.name}}</td>
      <td>{{listAnimal.age}}</td>
      <td>{{listAnimal.diet}}</td>
      <td>{{listAnimal.location}}</td>
      <td>{{listAnimal.caretakers}}</td>
      <td>{{listAnimal.sex}}</td>
      <td>{{listAnimal.likes}}</td>
      <td>{{listAnimal.dislikes}}</td>
      <td><button (click)="editButtonHasBeenClicked(listAnimal)">Edit {{listAnimal.name}}</button></td>
    </tr>
    </tbody>
  </table>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
