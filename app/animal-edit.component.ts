import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.name}}</h3>
      <table class="table">
        <thead>
          <th>Enter Species</th>
          <th>Enter Animal's Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          <td><input [(ngModel)]="childSelectedAnimal.species"></td>
          <td><input [(ngModel)]="childSelectedAnimal.name"></td>
          <td><input [(ngModel)]="childSelectedAnimal.age"></td>
        </tbody>
      </table>
      <button class="btn btn-info" (click)="submitButtonClicked()">Done editing!</button>
    </div>

  `
})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() submitButtonClickedSender = new EventEmitter();

  submitButtonClicked(){
  debugger;
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
