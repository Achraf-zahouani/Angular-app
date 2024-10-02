import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface User {
  id: number;
  username: string;
  password: string; // Secure this in real applications
}

interface Client {
  codiceFiscale: string;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = 'http://localhost:3000/users';
  private clientsUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  fetchUser(username: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username);
        console.log('Fetched Users:', users);
        return user && user.password === password ? user : null;
      }),
      catchError(error => {
        console.error('Error fetching users:', error);
        return of(null);
      })
    );
  }

  fetchClients(userId: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.clientsUrl}?userId=${userId}`).pipe(
      catchError(error => {
        console.error('Error fetching clients:', error);
        return of([]); // Return an empty array on error
      })
    );
  }
}
