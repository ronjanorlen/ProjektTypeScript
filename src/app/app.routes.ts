import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { RamschemaComponent } from './pages/ramschema/ramschema.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StudentUnionComponent } from './pages/student-union/student-union.component';
import { CampusComponent } from './pages/campus/campus.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "courses", component: CoursesComponent },
    { path: "ramschema", component: RamschemaComponent },
    { path: "student-union", component: StudentUnionComponent },
    { path: "campus", component: CampusComponent },
    { path: "contact", component: ContactComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "404", component: NotFoundComponent },
    { path: "**", component: NotFoundComponent }
];
