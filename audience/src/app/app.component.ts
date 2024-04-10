import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudienceComponent } from './audience/audience.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AudienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'auditory';
}
