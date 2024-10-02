import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  userInfo: any; // To store user information
  clientInfo: any; // To store client information

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Fetch users from the JSON server
      this.http.get<any[]>('http://localhost:3000/users').subscribe(users => {
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
          this.userInfo = user; // Store user info
          
          // Fetch clients associated with the user
          this.http.get<any[]>(`http://localhost:3000/clients?userId=${user.id}`).subscribe(clients => {
            if (clients.length > 0) {
              this.clientInfo = clients[0]; // Get the first client associated with the user
              alert(`Login successful!\nName: ${this.userInfo.username}\nCodice Fiscale: ${this.clientInfo.codiceFiscale}`);
            } else {
              alert('No associated client found.');
            }
          });
          
          this.router.navigate(['/']); // Redirect to home or another page
        } else {
          alert('Invalid credentials');
        }
      }, error => {
        console.error('Error fetching users:', error);
        alert('Error fetching users. Please try again later.');
      });
    }
  }
}