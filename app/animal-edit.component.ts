import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.name}} {{childSelectedAnimal.species}}</h3>
      <table class="table">
        <thead>
          <th>Enter Species</th>
          <th>Enter Animal's Name</th>
          <th>Carnivore or Herbivore?</th>
          <th>Location</th>
          <th>Number of caretakers</th>
          <th>Sex</th>
          <th>Likes</th>
          <th>Dislikes</th>
        </thead>
        <tbody>
          <td><input [(ngModel)]="childSelectedAnimal.species"></td>
          <td><input [(ngModel)]="childSelectedAnimal.name"></td>
          <td><input [(ngModel)]="childSelectedAnimal.diet"></td>
          <td><input [(ngModel)]="childSelectedAnimal.location"><td>
          <td><input [(ngModel)]="childSelectedAnimal.caretakers"></td>
          <td><input [(ngModel)]="childSelectedAnimal.sex"></td>
          <td><input [(ngModel)]="childSelectedAnimal.likes"></td>
          <td><input [(ngModel)]="childSelectedAnimal.dislikes"><td>
        </tbody>
      </table>
      <button class= "btn btn-info" (click)="submitButtonClicked()" >Done editing!</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() submitButtonClickedSender = new EventEmitter();

  submitButtonClicked(){
    this.submitButtonClickedSender.emit();
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
