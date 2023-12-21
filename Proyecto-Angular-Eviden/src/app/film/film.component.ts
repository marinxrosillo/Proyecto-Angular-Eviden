import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  title: string = "FILM LIST";

  films: any[] = [];

  constructor(
    private filmService: FilmService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.filmService.getAllFilms().subscribe(
      (data) => {
        this.films = data;
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  logout() {
    this.loginService.logout();
  }
}