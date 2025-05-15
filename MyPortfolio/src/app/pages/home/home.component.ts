import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = 'Dhanuesh';
  title = 'Software Developer | Full-Stack & ML Enthusiast';
  intro = 'Passionate about building web applications and machine learning solutions that solve real-world problems.';
}
