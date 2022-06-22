import { People, PeopleResult } from './../entities/people/people.model';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../entities/people/people.service';
import {Film, FilmResult} from './../entities/films/film.model';
import {FilmService} from '../entities/films/film.service';


@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent {
  listOfpeople: People[] = [];
   listOffilms: Film[] = [];
  headElements: string[] = [
    'name',
    'height',
    'mass',
    'hair color',
    'skin color',
    'eye color',
    'birth year',
    'gender',
    'homeworld',
    'films',
    'species',
    'vehicles',
    'starships'
  ];
headElementsFilm: string[] = [
    'title',
    'episode_id'
  ];

//   headElementsList: string []= [
//   'name'
//   ];


  constructor(private peopleService: PeopleService, private filmService: FilmService) {
    this.showAllPeople()
  }

  showAllPeople() {
    this.peopleService.getAllPeople().subscribe(
      (listOfpeople: PeopleResult) => {
        console.log(listOfpeople.results[0])
        this.listOfpeople = listOfpeople.results
      } );
      }

showAllFilm() { console.log("chegou aqui")
    this.filmService.getAllFilms().subscribe(
      (listOffilms: FilmResult) => {
        console.log(listOffilms.results[0])
        this.listOffilms = listOffilms.results
      } );
  }

//   showAllList() {
//      this.peopleService.getAllPeople().subscribe(
//        (listOfpeople: PeopleResult) => {
//          console.log(listOfpeople.results[0])
//          this.listOfpeople = listOfpeople.results
//        } );
//    }
}


