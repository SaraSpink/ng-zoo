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
          <td><input [(ngModel)]="childSelectedAnimal.age"></td>
          <td><input [(ngModel)]="childSelectedAnimal.diet"></td>
          <td><input [(ngModel)]="childSelectedAnimal.location"><td>
          <td><input [(ngModel)]="childSelectedAnimal.caretakers"></td>
          <td><input [(ngModel)]="childSelectedAnimal.sex"></td>
          <td><input [(ngModel)]="childSelectedAnimal.likes"></td>
          <td><input [(ngModel)]="childSelectedAnimal.dislikes"><td>
        </tbody>
      </table>
      <button class="btn btn-info" (click)="submitChangesButtonClicked()">Submit Changes!</button>
    </div>

  `
})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;

  @Output() submitChangesButtonClickedSender = new EventEmitter();

  submitChangesButtonClicked(){
    this.submitChangesButtonClickedSender.emit();
  }
}
