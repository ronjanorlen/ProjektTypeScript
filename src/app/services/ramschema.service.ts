import { Injectable } from '@angular/core';
import { Allcourses } from '../model/allcourses';

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  selectedCourses: Allcourses[] = []; // Lagra kurser i ramschemat

  constructor() { 
    this.loadMyCourses();
   }

  // Lägg till kurs
  addCourse(course: Allcourses): void {
    this.selectedCourses.push(course);
    this.saveMyCourses(); // Spara i localstorage
  }

  // Ta bort kurs baserat på index
  removeCourse(course: Allcourses): void {
    const index = this.selectedCourses.indexOf(course);
    if (index !== -1) {
      this.selectedCourses.splice(index, 1);
      this.saveMyCourses(); // Spara i localstorage
    }
  }

  // Hämta kurser i ramschemat
  getSelectedCourses() {
    return this.selectedCourses;
  }

  // Ladda kurser från localstorage
  loadMyCourses(): void {
    const savedCourses = localStorage.getItem('selectedCourses');
    if (savedCourses) {
      this.selectedCourses = JSON.parse(savedCourses);
    }
  }

    // Spara kurser i localstorage
    saveMyCourses(): void {
      localStorage.setItem('selectedCourses', JSON.stringify(this.selectedCourses));
    }
}
