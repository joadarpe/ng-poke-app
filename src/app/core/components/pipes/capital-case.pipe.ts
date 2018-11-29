import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalCase'
})
export class CapitalCasePipe implements PipeTransform {

  transform(value: string): any {
    return value ? `${value.substr(0,1).toUpperCase()}${value.substr(1)}` : '';
  }

}
