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
  filterValue: string = ""; // Filtrering tom först
  ascendDescend: boolean = true; // För stigande och fallande sortering
  numberOfCourses: number = 0; // Visa antal kurser

 constructor(private allcoursesService: AllcoursesService) {}

  // När applikationen startar
 ngOnInit() {
  this.allcoursesService.getCourses().subscribe((courses) => {
    this.allcourses = courses;
    this.filteredCourses = courses;
    this.updateNumberOfCourses(); // Uppdatera antal kurser som visas
  });
 }

  // Uppdatera antal kurser som visas
  updateNumberOfCourses(): void {
    this.numberOfCourses = this.filteredCourses.length;
  }

 // Filtrera på namn eller kurskod
 applyFilter(): void {
  this.filteredCourses = this.allcourses.filter((course) => 
    course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) ||
    course.courseName.toLowerCase().includes(this.filterValue.toLowerCase())
  );
  this.updateNumberOfCourses(); // Vid filtrering, uppdatera antal kurser som visas
 }

// Sortera på kurskod
sortCoursesByCode(): void {
  this.filteredCourses.sort((a, b) => {
    return this.ascendDescend ? a.courseCode.localeCompare(b.courseCode) : b.courseCode.localeCompare(a.courseCode);
  });
  this.ascendDescend = !this.ascendDescend;
}

// Sortera på kursnamn
sortCoursesByName(): void {
  this.filteredCourses.sort((a, b) => {
    return this.ascendDescend ? a.courseName.localeCompare(b.courseName) : b.courseName.localeCompare(a.courseName);
  });
  this.ascendDescend = !this.ascendDescend;
}

// Sortera på poäng
sortCoursesByPoints(): void {
  this.filteredCourses.sort((a, b) => {
    return this.ascendDescend ? a.points - b.points : b.points - a.points;
  });
  this.ascendDescend = !this.ascendDescend;
}

// Sortera på ämne 
sortCoursesBySubject(): void {
  this.filteredCourses.sort((a, b) => {
    return this.ascendDescend ? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject);
  });
  this.ascendDescend = !this.ascendDescend;
}
}
