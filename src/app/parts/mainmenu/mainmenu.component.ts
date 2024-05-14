import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.scss'
})
export class MainmenuComponent {
  // Property för headerbild
  headerImage: string = "./assets/images/header1.jpg";

}
