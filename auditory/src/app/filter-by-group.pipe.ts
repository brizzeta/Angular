import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByGroup'
})
export class FilterByGroupPipe implements PipeTransform {

  transform(auditoriums: {name: string, seats: number, faculty: string}[], groupName: string, groups: {name: string, studentsCount: number, faculty: string}[]) {
    if (!groupName) return auditoriums;
    
    const group = groups.find(g => g.name === groupName); // Изменено здесь
    if (!group) return [];

    return auditoriums.filter(auditorium => auditorium.seats >= group.studentsCount);
  }

}
