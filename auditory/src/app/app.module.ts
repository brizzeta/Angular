import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditoryComponent } from './auditory/auditory.component';
import { FilterByAlphabetPipe } from './filter-by-alphabet.pipe';
import { FilterByFacultyPipe } from './filter-by-faculty.pipe';
import { FilterByGroupPipe } from './filter-by-group.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuditoryComponent,
    FilterByAlphabetPipe,
    FilterByFacultyPipe,
    FilterByGroupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
