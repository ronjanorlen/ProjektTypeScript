import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Properties för bilder
  homeImage1: string = "./assets/images/home1.jpg";
  homeImage2: string = "./assets/images/home2.jpg";
  homeImage3: string = "./assets/images/campus.jpg";
  homeImage4: string ="./assets/images/home4.jpg";
  // Property för headerbild
  headerImage: string = "./assets/images/header1.jpg";
}
