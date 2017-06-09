import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'animal-list',
	template: `
	<div class="row">
		<div class="col-sm-3" *ngFor="let currentAnimal of childAnimalList">
			<p><strong>Species:</strong> {{currentAnimal.species}}</p>
			<p><strong>Animal Name:</strong> {{currentAnimal.name}}</p>
			<p><strong>Age:</strong> {{currentAnimal.age}}</p>
			<p><strong>Diet:</strong> {{currentAnimal.diet}}</p>
      <p><strong>Location:</strong> {{currentAnimal.location}}</p>
			<p><strong>Current Number of Caretakers:</strong> {{currentAnimal.caretakers}}</p>
      <p><strong>Likes:</strong> {{currentAnimal.likes}}</p>
      <p><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</p>
			<button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal Information</button>
		</div>
	</div>
		`
})

export class AnimalListComponent {
	@Input() childAnimalList: Animal[];
	@Output() clickSender = new EventEmitter();

	editButtonHasBeenClicked(animalToEdit: Animal) {
		this.clickSender.emit(animalToEdit);
	}
}
