import { Injectable } from '@angular/core';
import { Allcourses } from '../model/allcourses';

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  selectedCourses: Allcourses[] = []; // Lagra kurser i ramschemat
  totalPoints: number = 0; // Antal poäng

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
  getSelectedCourses(): Allcourses[] {
    // Hämta från localstorage
    const savedCourses = localStorage.getItem('selectedCourses');
    // Kontroll om det finns några kurser
    if (savedCourses) {
      return this.selectedCourses;
      // Om inga kurser finns, returnera tom array
    } else {
      return [];
    }
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

    // Hämta totala poängen
    getTotalPoints(): number {
      let totalPoints = 0;
      this.selectedCourses.forEach(course => {
        totalPoints += course.points;
      });
      return totalPoints;
    }

}
