import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  codiceFiscale: string;
  nome: string;
  cognome: string;
  dataDiNascita: string;
  azienda: string;
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private apiUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  
  getById(id: number): Observable<Client[]> {
    const url = ` ${this.apiUrl}?userId=${id}` ;
    return this.http.get<Client[]>(url);
  }
}
