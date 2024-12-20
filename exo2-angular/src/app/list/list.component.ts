import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    NgIf
  ],
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  films = [
    {
      title: 'The office',
      link: 'https://allocine.fr/series/ficheserie_gen_cserie=199.html',
      poster: 'assets/film1.jpg'
    },
    {
      title: 'Vikings',
      link: 'https://www.allocine.fr/series/ficheserie_gen_cserie=10214.html',
      poster: 'assets/film2.gif'
    },
    {
      title: 'Gossip Girl',
      link: 'https://www.allocine.fr/series/ficheserie_gen_cserie=3241.html',
      poster: 'assets/film 3.jpg'
    },
    {
      title: 'Pirates des Caraïbes : la Malédiction du Black Pearl',
      link: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=46117.html',
      poster: 'assets/film4.gif'
    },
    {
      title: 'Vampire Diaries',
      link: 'https://www.allocine.fr/series/ficheserie_gen_cserie=5154.html',
      poster: 'assets/film5.jpg'
    }
  ];

  selectedFilm: any = null;

  selectFilm(film: any): void {
    console.log('Film sélectionné:', film);
    this.selectedFilm = film;
  }

}

