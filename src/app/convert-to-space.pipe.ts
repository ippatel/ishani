import { Pipe, PipeTransform } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }

}
