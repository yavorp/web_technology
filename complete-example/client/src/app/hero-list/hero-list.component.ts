import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';
import { HeroService } from '../services/hero.service';
import { Hero } from '../types/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private errorService: ErrorService) { }

  ngOnInit() {
    this.heroService.getAll().pipe(
      catchError(error => {
        this.errorService.logError(error);
        return [];
      }),
    ).subscribe(heroes => {
      console.log(heroes);
       this.heroes = heroes;
      });
  }

}
