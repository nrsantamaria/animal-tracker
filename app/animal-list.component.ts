import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'animal-list',
	template: `
	<div class="col-sm-3">
		<select class="form-control" (change)="onChange($event.target.value)">
			<option value="allAges">All Animals</option>
			<option value="young">Young Animals</option>
			<option value="mature">Mature Animals</option>
		</select>
	</div>
	<div class="col-sm-3">
		<select class="form-control" (change)="onChange2($event.target.value)">
			<option value="allDiets">All Diets</option>
			<option value="carnivore">Carnivores</option>
			<option value="herbivore">Herbivores</option>
			<option value="omnivore">Omnivores</option>
		</select>
	</div>
	<br>
	<br>
	<div class="row">
		<div class="col-sm-3" *ngFor="let currentAnimal of childAnimalList | ageSort:filterByAge | dietSort:filterByDiet">
			<p><strong>Species:</strong> {{currentAnimal.species}}</p>
			<p><strong>Animal Name:</strong> {{currentAnimal.name}}</p>
			<p><strong>Age:</strong> {{currentAnimal.age}}</p>
			<p><strong>Diet:</strong> {{currentAnimal.diet}}</p>
      <p><strong>Location:</strong> {{currentAnimal.location}}</p>
			<p><strong>Number of Caretakers:</strong> {{currentAnimal.caretakers}}</p>
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

	filterByAge: string = "allAges";
	filterByDiet: string = "allDiets"

	onChange(optionFromMenu) {
		this.filterByAge = optionFromMenu;
	}

	onChange2(optionFromMenu) {
		this.filterByDiet = optionFromMenu;
	}

	editButtonHasBeenClicked(animalToEdit: Animal) {
		this.clickSender.emit(animalToEdit);
	}
}
