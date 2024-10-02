import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  username: string = '';
  email: string = '';

  addUser() {
    console.log('Funzione addUser chiamata');
    if (this.username && this.email) {
      console.log('Utente aggiunto:', { username: this.username, email: this.email });
      this.username = '';
      this.email = '';
    } else {
      console.error('Compila tutti i campi');
    }
  }
}