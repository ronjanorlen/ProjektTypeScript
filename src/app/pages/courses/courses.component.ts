import { Component } from '@angular/core';
import { Allcourses } from '../../model/allcourses';
import { AllcoursesService } from '../../services/allcourses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // Properties
  allcourses: Allcourses [] = [];

 constructor(private allcoursesService: AllcoursesService) {}

 ngOnInit() {
  this.allcoursesService.getCourses().subscribe((courses) => {
    this.allcourses = courses;
  })
 }
}
