import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="jumbotron">
		<h1 id="head" >Animal Tracker</h1>
	</div>
	<div class="container">
		<animal-list  [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
		<edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
		<hr>
		<new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
	</div>
	`
})

export class AppComponent {
	masterAnimalList: Animal[] = [];
		selectedAnimal = null;

		addAnimal(newAnimalFromChild: Animal) {
			this.masterAnimalList.push(newAnimalFromChild)
		}

		editAnimal(clickedAnimal) {
			this.selectedAnimal = clickedAnimal;
		}

		finishedEditing(){
			this.selectedAnimal = null;
		}
}
