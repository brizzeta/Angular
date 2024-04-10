import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFaculty'
})
export class FilterByFacultyPipe implements PipeTransform {

  transform(auditoriums: {name: string, seats: number, faculty: string}[], faculty: string) {
    if (!faculty) return auditoriums;
    return auditoriums.filter(auditorium => auditorium.faculty === faculty);
  }

}
