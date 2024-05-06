import { Component } from '@angular/core';
import { Allcourses } from '../../model/allcourses';
import { AllcoursesService } from '../../services/allcourses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // Properties
  allcourses: Allcourses [] = [];
  filteredCourses: Allcourses[] = [];
  filterValue: string = "";

 constructor(private allcoursesService: AllcoursesService) {}

  // När applikationen startar
 ngOnInit() {
  this.allcoursesService.getCourses().subscribe((courses) => {
    this.allcourses = courses;
    this.filteredCourses = courses;
  });
 }
 // Filtrera på namn eller kurskod
 applyFilter(): void {
  this.filteredCourses = this.allcourses.filter((course) => 
    course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) ||
    course.courseName.toLowerCase().includes(this.filterValue.toLowerCase())
  );
 }

}
