import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-campus',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './campus.component.html',
  styleUrl: './campus.component.scss'
})
export class CampusComponent {
  // Property för bild
  campusImage: string = "./assets/images/campus2.jpg";
}
