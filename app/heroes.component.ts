import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './model/hero';
import {HeroService} from './service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/html/heroes.component.html',
  styleUrls:  ['app/css/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: []  
})

export class HeroesComponent implements OnInit {
    
    heroes: Hero[];        
    selectedHero: Hero;
    
    constructor(private _heroService: HeroService,
                private _router: Router) { 
    }
    
    ngOnInit(){
        this.getHeroes();
    }
    
    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }

    getHeroes() {
       this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
 }