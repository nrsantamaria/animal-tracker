import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';

import { NewAnimalComponent } from './new-animal.component';
import { AnimalListComponent } from './animal-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewAnimalComponent, AnimalListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
