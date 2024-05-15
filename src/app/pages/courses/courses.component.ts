import { Component } from '@angular/core';
import { Allcourses } from '../../model/allcourses';
import { AllcoursesService } from '../../services/allcourses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RamschemaService } from '../../services/ramschema.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // Properties
  allcourses: Allcourses [] = []; // Lagra alla kurser
  filteredCourses: Allcourses[] = []; // Lagra alla filtrerade kurser
  filterValue: string = ""; // Filtrering tom först
  ascendDescend: boolean = true; // För stigande och fallande sortering
  numberOfCourses: number = 0; // Visa antal kurser
  subjects: string [] = []; // Lagra alla ämnen
  selectedSubject: string = ""; // Sortering tom först
  thisPage: number = -1; // Aktuell sida
  coursesPerPage: number = 30; // Antal kurser som visas på en sida
  addedCourses: Map<string, boolean> = new Map<string, boolean>(); // Map för att hålla reda på tillagda kurser

 constructor(private allcoursesService: AllcoursesService, private ramschemaService: RamschemaService) {}

  // När applikationen startar
 ngOnInit() {
  // Hämta kurser och prenumera på svar
  this.allcoursesService.getCourses().subscribe((courses) => {
    // Ta emot data och lagra i kurslista
    this.allcourses = courses;
    // Lagra data för filtrerade kurser
    this.filteredCourses = courses;
    // Uppdatera antal kurser som visas
    this.updateNumberOfCourses(); 
    // Hämta och lagra alla ämnen
    this.subjects = this.chooseSubject(courses); 
    // Ställ in aktuell sida till 1
    this.thisPage = 1;
  });
 }

  // Uppdatera antal kurser som visas
  updateNumberOfCourses(): void {
    // Räkna ut startindex för kurser på aktuell sida
    const startIndex: number = (this.thisPage - 1) * this.coursesPerPage;
    // Räkna ut slutindex, returnera startindex och antal kurser på sidan eller kursfiltreringslängd
    const endIndex: number = Math.min(startIndex + this.coursesPerPage, this.filteredCourses.length);
    // Uppdatera hur många kurser som visas
    this.numberOfCourses = endIndex - startIndex;
  }

  // Byt sida
  changePage(newPage: number): void {
    // Uppdatera sidnummer
    this.thisPage = newPage;
    // Uppdatera antal kurses
    this.updateNumberOfCourses();
  }

  // Hämta alla ämnen
  chooseSubject(courses: Allcourses[]): string[] {
    // Skapa sträng för varje ämne
    const eachSubject = new Set<string>();
    // Loopa igenom kurser och ta med kursens ämne
    courses.forEach(course => eachSubject.add(course.subject));
    // Returnera array med ämnen
    return Array.from(eachSubject);
  }

  // Sortera på ämne
  filterBySubject(): void {
    // Kontroll om inget ämne är valt
    if (this.selectedSubject === '') {
      // Visa alla kurser om inget ämne valts
      this.filteredCourses = this.allcourses; 
    } else {
      // Filtrera kurser beroende på vilket ämne som valts
      this.filteredCourses = this.allcourses.filter(course => course.subject === this.selectedSubject);
    }
    // Starta på sida 1 när filtrering gjorts
    this.thisPage = 1;
    // Uppdatera antal kurser som visas
    this.updateNumberOfCourses(); 
  }


 // Sök på namn eller kurskod
 applyFilter(): void {
  // Filtrera kurser i kurslista
  this.filteredCourses = this.allcourses.filter((course) => 
    // Kontroll för söksträng, sök matchning mot kurskod eller kursnamn
    course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase()) ||
    course.courseName.toLowerCase().includes(this.filterValue.toLowerCase())
  );
  // Starts på sida 1
  this.thisPage = 1;
  // Uppdatera antal kurser som visas
  this.updateNumberOfCourses(); 
 }

// Sortera på kurskod
sortCoursesByCode(): void {
  // Använd sort för att sortera kurskod
  this.filteredCourses.sort((a, b) => {
    // Jämför kurskoder och sortera i stigande eller fallande ordning
    return this.ascendDescend ? a.courseCode.localeCompare(b.courseCode) : b.courseCode.localeCompare(a.courseCode);
  });
  this.ascendDescend = !this.ascendDescend;
}

// Sortera på kursnamn
sortCoursesByName(): void {
  // Använd sort för att sortera kursnamn
  this.filteredCourses.sort((a, b) => {
    // Jämför kursnamn och sortera i stigande eller fallande ordning
    return this.ascendDescend ? a.courseName.localeCompare(b.courseName) : b.courseName.localeCompare(a.courseName);
  });
  this.ascendDescend = !this.ascendDescend;
}

// Sortera på poäng
sortCoursesByPoints(): void {
  // Använd sort för att sortera poäng
  this.filteredCourses.sort((a, b) => {
    // Jämför poäng och sortera i stigande eller fallande ordning
    return this.ascendDescend ? a.points - b.points : b.points - a.points;
  });
  this.ascendDescend = !this.ascendDescend;
}

// Sortera på ämne 
sortCoursesBySubject(): void {
  // Använd sort för att sortera på ämne
  this.filteredCourses.sort((a, b) => {
    // Jämför ämne och sortera i stigande eller fallande ordning
    return this.ascendDescend ? a.subject.localeCompare(b.subject) : b.subject.localeCompare(a.subject);
  });
  this.ascendDescend = !this.ascendDescend;
}

// Lägg till kurs i ramschema
addToSchedule(course: Allcourses): void {
  // Kontroll om kursen redan finns i ramschema
  if (!this.ramschemaService.isCourseAdded(course)) {
    // Om inte, lägg till i ramschema
    this.ramschemaService.addCourse(course);
    // Markera kursen som tillagd
    this.addedCourses.set(course.courseCode, true);
  } else {
    // Om kursen redan är tillagd
    alert("Denna kurs finns redan i ramschemat.");
  }
}
}
