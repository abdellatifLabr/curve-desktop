import { Pipe, PipeTransform } from '@angular/core';
import * as pluralize from 'pluralize';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return pluralize(value);
  }

}
