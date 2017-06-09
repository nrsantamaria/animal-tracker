import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "dietSort",
  pure: false
})

export class DietSortPipe implements PipeTransform {
  transform(input: Animal[], content){
    var output: Animal[] = [];
    if(content === "carnivore") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (content === "herbivore") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].diet === "Herbivore") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (content === "omnivore") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].diet === "Omnivore") {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}
