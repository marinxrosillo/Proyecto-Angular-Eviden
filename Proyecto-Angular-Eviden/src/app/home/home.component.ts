import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/Client';
import { ClientsService } from '../service/clients.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Clients List';

  clients: Client[] = [];
  errorMessage: string | undefined;

  constructor(
    private httpClient: HttpClient,
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  delete(client: Client): void {
    this.clientService.deleteClient(client.id).subscribe(
      res => this.clientService.getAllClients().subscribe(
        response => this.clients = response
      )
    )
  }

  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as const,
      responseType: 'json' as const
    };

    this.httpClient.get<any>('http://localhost:8080/api/clients', httpOptions)
      .subscribe(
        (response: HttpResponse<any>) => {
          const token = response.headers.get('Authorization');

          if (token) {
            localStorage.setItem('token', token);
          }

          this.clients = response.body;
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }
}