import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "ageSort",
  pure: false
})

export class AgeSortPipe implements PipeTransform {
  transform(input: Animal[], content){
    var output: Animal[] = [];
    if(content === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (content === "mature") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age > 2) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}
