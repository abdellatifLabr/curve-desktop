import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noUnderscore'
})
export class NoUnderscore implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/_/g, " ");
  }

}
