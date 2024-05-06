import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allcourses } from '../model/allcourses';

@Injectable({
  providedIn: 'root'
})
export class AllcoursesService {

  // Property
  private url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  constructor(private http: HttpClient) { }

  // Metoder
  /* Hämta kurser */
  getCourses(): Observable<Allcourses[]> {
    return this.http.get<Allcourses[]>(this.url);
  }
}
