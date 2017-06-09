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
	</div>
	`
})

export class AppComponent {

}
