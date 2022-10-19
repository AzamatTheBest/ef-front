import { Pipe, PipeTransform } from '@angular/core';
import { Foundation } from '../model/found';

@Pipe({
  name: 'filterFound'
})
export class FilterFoundPipe implements PipeTransform {

  transform(found: Foundation[], search: string): Foundation[] {
    return found.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));
  }

}
