import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAlphabet'
})
export class FilterByAlphabetPipe implements PipeTransform {

  transform(auditoriums: {name: string, seats: number, faculty: string}[], type: string) {
    if (type === 'seats') {
      return auditoriums.sort((a, b) => a.seats - b.seats);
    } else if (type === 'title') {
      return auditoriums.sort((a, b) => a.name.localeCompare(b.name));
    }
    return auditoriums;
  }

}
