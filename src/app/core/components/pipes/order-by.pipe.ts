import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../../models/classes/Pokemon';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(collection: Pokemon[], att?: string): any {
    let sorted = collection.sort((p1, p2) => p1[att] - p2[att])
    return sorted;
  }

}
