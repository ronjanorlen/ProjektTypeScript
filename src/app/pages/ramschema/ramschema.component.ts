import { Component } from '@angular/core';
import { Allcourses } from '../../model/allcourses';
import { RamschemaService } from '../../services/ramschema.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.scss'
})
export class RamschemaComponent {
  selectedCourses: Allcourses[] = []; // Hämta alla tillagda kurser
  totalPoints: number = 0; // Antal poäng

  // Importera service för ramschema
  constructor(private ramschemaService: RamschemaService) {}

  ngOnInit(): void {
    // Hämta ramschema från ramschemaservicen
    this.selectedCourses = this.ramschemaService.getSelectedCourses();
    // Hämta antal poäng
    this.totalPoints = this.ramschemaService.getTotalPoints();
  }

  // Ta bort kurs från listan
  removeCourse(course: Allcourses): void {
    this.ramschemaService.removeCourse(course);
    // Uppdatera listan när kurs tagits bort
    this.selectedCourses = this.ramschemaService.getSelectedCourses();
     // Uppdatera totala poängen
     this.totalPoints = this.ramschemaService.getTotalPoints();
  }
}
