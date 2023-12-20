import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "src/models/Client";
import { LoginService } from "./login.service";

@Injectable()
export class ClientsService {

    private url: string = "http://localhost:8080/api/clients";

    constructor(
        private http: HttpClient,
        private loginService: LoginService
    ) {}

    //Get Clients
    getAllClients(): Observable<Client[]> {
        return this.http.get<Client[]>(this.url);
    }

    //Get Client By Id
    getById(id: number): Observable<Client> {
        return this.http.get<Client>(this.url + "/" + id);
    }

    //Create Client
    createClient(client: Client): Observable<Client> {
        return this.http.post<Client>(this.url, client);
    }

    //Update Client
    updateClient(client: Client): Observable<Client> {
        return this.http.put<Client>(this.url + "/" + client.id, client);
    }

    //Delete Client
    deleteClient(id: number): Observable<Client> {
        return this.http.delete<Client>(this.url + "/" + id);
    }
}