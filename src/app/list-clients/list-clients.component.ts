import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from '../client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})

export class ListClientsComponent implements OnInit{
  client: Client | undefined;
  clients: Client[] = [];
  displayedColumns: string[] = ['id', 'codiceFiscale', 'nome', 'cognome',
    'dataDiNascita', 'azienda'];

    id: number =-1;
    constructor(private clientService: ClientService) {}

    ngOnInit(): void {
      /*this.getClients();*/
      this.id =sessionStorage.getItem('userId') ? parseInt(sessionStorage.getItem('userId') as string) : -1; 

      this.getById(this.id);
    }

    findAll(): void{
      this.clientService.getClients().subscribe(
        (data: Client[])=>{
          this.clients =data;
        },
        (error)=>{
          console.error('errore recupero lista clienti', error)
        }
      );
    }

  getClients(): void {
    this.clientService.getClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      (error) => {
        console.error('Errore recupero lista clienti', error);
      }
    );
  }
  
  getById(id:number): void {
    this.clientService.getById(id).subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      (error) => {
        console.error('Vuoto', error);
      }
    )
  }
}

