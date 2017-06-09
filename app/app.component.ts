import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
	selector: 'app-root',
	template:`
	<div class="jumbotron">
		<h1 id="head" >Animal Tracker</h1>
	</div>
	<div class="container">
		<h2>Animal List</h2>
		<animal-list  [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
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
