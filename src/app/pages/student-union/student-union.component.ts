import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-union',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './student-union.component.html',
  styleUrl: './student-union.component.scss'
})
export class StudentUnionComponent {
  // Property för bild
  studentUnion: string = "./assets/images/studentunion.jpg";
}
