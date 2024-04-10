import { Component } from '@angular/core';

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [],
  templateUrl: './audience.component.html',
  styleUrl: './audience.component.css'
})
export class AudienceComponent {
  auditoriums: {name: string, seats: number, faculty: string}[]= [
    { name: 'Алгоритм', seats: 15, faculty: 'Компьютерные науки' },
    { name: 'Фемида', seats: 10, faculty: 'Юридический' },
    { name: 'Штурман', seats: 20, faculty: 'Судоводитель' }
  ];

  groups: {name: string, studentsCount: number, faculty: string}[] = [
    { name: 'Группа 202', studentsCount: 15, faculty: 'Компьютерные науки' },
    { name: 'Группа 302', studentsCount: 10, faculty: 'Юридический' },
    { name: 'Группа 215', studentsCount: 20, faculty: 'Судоводитель' }
  ];

  selectedFaculty: string = '';
  selectedGroup: string = '';
  sortType: string = '';

  uniqueFaculties: string[] = this.auditoriums.map(auditorium => auditorium.faculty).filter((value, index, self) => self.indexOf(value) === index);

  resetFilters(): void {
    this.selectedFaculty = '';
    this.selectedGroup = '';
    this.sortType = '';
  }

  filterBySeats(): void {
    this.sortType = 'seats';
  }

  filterByTitle(): void {
    this.sortType = 'title';
  }
}
