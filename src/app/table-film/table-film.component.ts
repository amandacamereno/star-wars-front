import { Component,Input, OnInit} from '@angular/core';
import {Film} from './../entities/films/film.model';
import {FilmService} from '../entities/films/film.service';

  @Component({
  selector: 'app-table-film',
  templateUrl: './table-film.component.html',
  styleUrls: ['./table-film.component.css']
  })
  export class TableFilmComponent implements OnInit{
  @Input() films: string | undefined;
  titleFilm: string [] =[];
  listFilms: string[] | undefined;
  titles: string[] = [];

  constructor(private filmService: FilmService){}

  ngOnInit(): void {
    if(this.films != undefined){
      this.listFilms = this.films.split(',');
      this.getAllTitles(this.listFilms)
    }
  }





//   const FILMS: Films[] = [
//     {
//     title: 'A new hope',
//     episode_id: '4'
//     },
//     {
//     title: 'The Empire Strikes Back',
//     episode_id: '5'
//     },
//     {
//     title: 'Return of the Jedi',
//     episode_id: '6'
//     },
//     {
//     title: 'The Phantom Menace',
//     episode_id: '1'
//     },
//     {
//     title: 'Attack of the Clones',
//     episode_id: '2'
//     },
//     {
//     title: 'Revenge of the Sith',
//     episode_id: '3'
//     }
//     ];

      async getAllTitles(listFilms: string[]){
        listFilms.forEach(urlFilm => {
          this.filmService.getFilmById(urlFilm).subscribe(
            (film: Film) => {
              this.titleFilm.push(film.title);
            } );
        });
      }

}

