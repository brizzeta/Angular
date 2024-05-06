import { Component, OnInit } from '@angular/core';
import { ApifilmService } from '../apifilm.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent {
  title: string = '';
  type: string = 'movie';
  isTouched: boolean = false;
  films: any[] = [];

  constructor(
    private http: ApifilmService,
    private router: Router,
    private titleService: Title
  ) {}

  submit(): void {
    this.http.getFilms(this.title, this.type).subscribe(
      (data: any) => {
        if (data && data.Search) {
          this.films = data.Search;
        } else {
          alert("Films not found!");
          this.films = [];
        }
      },
      (error) => {
        console.error('Error:', error);
        this.films = [];
        alert("Films not found!");
      }
    );
    this.isTouched = true;
  }

  showDetails(imdbID: string): void {
    this.router.navigate(['/film', imdbID]);
  }
}
