import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected here
})
export class AppComponent {
  title = 'angular-app';


  constructor() {
    
  }

  getTitle(): string {
    return this.title;
  }
}
