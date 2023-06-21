import { Component, OnInit, OnDestroy} from '@angular/core';
import { HeroesService } from './heroes.service';

import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}






