import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/Client';
import { ClientsService } from '../service/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  title: string = "Client Information";

  client: Client = new Client();

  constructor(
    private clientService: ClientsService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id: number = e['id'];
        if(id) {
          this.clientService.getById(id).subscribe(
            es => this.client = es
          );
        }
      }
    );
  }

  create(): void {
    this.clientService.createClient(this.client).subscribe(
      response => this.router.navigate([''])
    );
  }

  update(): void {
    this.clientService.updateClient(this.client).subscribe(
      e => this.router.navigate([''])
    );
  }
}