import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { FilmResult, Film } from './film.model';

 @Injectable({
     providedIn: 'root'
 })
 export class FilmService {
     constructor(private http: HttpClient) { }

     filmUrl = 'https://swapi.dev/api/films/?format=json';
     formatJSON = 'format=json';

     getAllFilms(){
     return this.http.get<FilmResult>(this.filmUrl + this.formatJSON);
     }

     getFilmById(url: string){
     return this.http.get<Film>(url + this.formatJSON);
     }

 }
