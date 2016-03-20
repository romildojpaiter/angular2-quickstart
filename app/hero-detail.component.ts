import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './model/hero';
import {HeroService} from './service/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/html/detail-hero.component.html',
    styleUrls: ['app/css/detail-hero.component.css']  
})

export class HeroDetailComponent implements OnInit{
    
    hero: Hero;
    
    constructor(private _heroService: HeroService,
                private _routeParams: RouteParams) { 
    }
    
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);   
    }
    
    goBack(){
        window.history.back();
    }

    onClear(){
        this.hero = null;
    }    
    
}