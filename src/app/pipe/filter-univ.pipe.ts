import { Pipe, PipeTransform } from '@angular/core';
import { University } from '../model/univ';

@Pipe({
  name: 'filterUniv'
})
export class FilterUnivPipe implements PipeTransform {

  transform(univs: University[], search: string): University[] {
    return univs.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  }

}
