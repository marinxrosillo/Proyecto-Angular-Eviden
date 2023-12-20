import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from 'src/models/Film';

@Injectable({
    providedIn: 'root'
})
export class FilmService {
    private url = 'http://localhost:8080/api/films';

    constructor(private http: HttpClient) { }

    //Get Films
    getAllFilms(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    //Get Film By Id
    getById(id: number): Observable<Film> {
        return this.http.get<Film>(this.url + "/" + id);
    }

    //Create Film
    createFilm(film: Film): Observable<Film> {
        return this.http.post<Film>(this.url, film);
    }

    //Update Film
    updateFilm(film: Film): Observable<Film> {
        return this.http.put<Film>(this.url + "/" + film.id, film);
    }

    //Delete Film
    deleteFilm(id: number): Observable<Film> {
        return this.http.delete<Film>(this.url + "/" + id);
    }
}