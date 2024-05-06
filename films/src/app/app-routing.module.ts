import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './find/find.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [  { 
  path: '', component: FindComponent },
{ path: 'search', component: FindComponent },
{ path: 'film/:imdbID', component: FilmComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
