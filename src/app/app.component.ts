import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetsWorkTogetherComponent } from './lets-work-together/lets-work-together.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LetsWorkTogetherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VisitCards';
}
