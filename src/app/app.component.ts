import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from './parts/mainmenu/mainmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjektTypeScript';
}
