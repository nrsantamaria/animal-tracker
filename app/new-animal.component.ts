import { Component, Output, EventEmitter } from '@angular/core';
import  { Animal } from './animal.model';


@Component({
	selector: 'new-animal',
	template:`
	<h2>Add a New Animal</h2>
	<div class="form-group">
		<label>Species:</label>
		<input class="form-control" #newSpecies>
	</div>
	<div class="form-group">
		<label>Animal Name:</label>
		<input class="form-control" #newAnimalName>
	</div>
  <div class="form-group">
		<label>Age:</label>
		<input class="form-control" type="number" min="1" #newAge>
	</div>
	<div class="form-group">
		<label>Diet:</label>
		<select class="form-control" #newDiet>
			<option value="Carnivore">Carnivore</option>
			<option value="Herbivore">Herbivore</option>
			<option value="Omnivore">Omnivore</option>
		</select>
	</div>
  <div class="form-group">
		<label>Location:</label>
		<input class="form-control" #newLocation>
	</div>
	<div class="form-group">
		<label>Caretakers:</label>
		<input class="form-control" type="number" min="1" #newCaretakers>
	</div>
  <div class="form-group">
		<label>Likes:</label>
		<input class="form-control" #newLikes>
	</div>
  <div class="form-group">
		<label>Dislikes:</label>
		<input class="form-control" #newDislikes>
	</div>
	<button class="btn btn-success" (click)="submitForm(newSpecies.value, newAnimalName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newLikes.value, newDislikes.value); newSpecies.value=''; newAnimalName.value=''; newAge.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
	`
})

export class NewAnimalComponent {
	@Output() newAnimalSender = new EventEmitter();

	submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, likes: string, dislikes: string){
		var newAnimalToAdd: Animal = new Animal (species, name, age, diet, location, caretakers, likes, dislikes);
		this.newAnimalSender.emit(newAnimalToAdd);
	}
}
