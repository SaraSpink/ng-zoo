import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], animalAge) {
    let output: Animal[] = [];

    // if (animalAge === "allAnimals"){
    //   for(var i=0; i<input.length;i++){
    //     if(input[i].age >= 1 ){
    //     output.push(input[i]);
    //   }
    // }
    //   return output;
   if(animalAge === "mature"){
        for (let i = 0; i < input.length; i++) {
          if (input[i].age > 2) {
            output.push(input[i]);
          }
        }
      return output;
    } else if (animalAge === "young"){
      for(var i=0; i<input.length;i++){
        if(input[i].age <= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
