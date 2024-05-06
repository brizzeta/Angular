import { Component, OnInit } from '@angular/core';
import { ApifilmService } from '../apifilm.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  imdbID: string = '';
  data: any;

  constructor(
    private http: ApifilmService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(({ imdbID }) => {
      this.imdbID = imdbID;
      this.http.getFilmsById(this.imdbID).subscribe((data: any) => {
        this.data = data;
      });
    });
  }

  back() {
    this.router.navigate(['search']);
  }
}
