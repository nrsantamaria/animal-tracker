import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Animal } from './animal.model';

@Component({
	selector: 'edit-animal',
	template:`
	<div *ngIf="childSelectedAnimal">
  <hr>
		<h3>Edit Animal:</h3>
    <h4>{{childSelectedAnimal.species}}: {{childSelectedAnimal.name}}</h4>
		<br>
		<div class="well">
			<div class="row">
				<div class="col-sm-4">
					<div class="form-group">
						<label>Species:</label>
						<input class="form-control" [(ngModel)]="childSelectedAnimal.species">
					</div>
				</div>
				<div class="col-sm-4">
					<div class="form-group">
						<label>Animal Name:</label>
						<input class="form-control" [(ngModel)]="childSelectedAnimal.name">
					</div>
				</div>
				<div class="col-sm-4">
		      <div class="form-group">
						<label>Age:</label>
						<input type="number" min="1" class="form-control" [(ngModel)]="childSelectedAnimal.age">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
					<div class="form-group">
						<label>Diet:</label>
						<select class="form-control" [(ngModel)]="childSelectedAnimal.diet">
		          <option value="Carnivore">Carnivore</option>
		          <option value="Herbivore">Herbivore</option>
		          <option value="Omnivore">Omnivore</option>
						</select>
					</div>
				</div>
			<div class="col-sm-4">
				<div class="form-group">
					<label>Location:</label>
					<input class="form-control" [(ngModel)]="childSelectedAnimal.location">
				</div>
			</div>
			<div class="col-sm-4">
				<div class="form-group">
					<label>Caretakers:</label>
					<input type="number" min="1" class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
				</div>
			</div>
		</div>
    <div class="form-group">
			<label>Likes:</label>
			<input class="form-control" [(ngModel)]="childSelectedAnimal.likes">
		</div>
    <div class="form-group">
			<label>Dislikes:</label>
			<input class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
		</div>
		<div class="form-group">
			<label>Photo:</label>
			<input type="url" class="form-control" [(ngModel)]="childSelectedAnimal.photo">
		</div>
		<button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
		</div>
	</div>
	`
})

export class EditAnimalComponent {
	@Input() childSelectedAnimal: Animal;
	@Output() doneButtonClickedSender = new EventEmitter();

	doneButtonClicked() {
		this.doneButtonClickedSender.emit();
	}
}
