import { Component } from '@angular/core';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.component.html',
  styleUrl: './auditory.component.css'
})
export class AuditoryComponent {
  auditoriums: {name: string, seats: number, faculty: string}[]= [
    { name: 'Algorithm', seats: 15, faculty: 'Computer Science' },
    { name: 'Athena', seats: 10, faculty: 'Law' },
    { name: 'Navigator', seats: 20, faculty: 'Navigation' },
    { name: 'Discovery', seats: 25, faculty: 'Physics' },
    { name: 'Innovation', seats: 30, faculty: 'Engineering' }
  ];

  groups: {name: string, studentsCount: number, faculty: string}[] = [
    { name: 'Group 101', studentsCount: 15, faculty: 'Computer Science' },
    { name: 'Group 202', studentsCount: 10, faculty: 'Law' },
    { name: 'Group 303', studentsCount: 20, faculty: 'Navigation' },
    { name: 'Group 404', studentsCount: 25, faculty: 'Physics' },
    { name: 'Group 505', studentsCount: 30, faculty: 'Engineering' }
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
