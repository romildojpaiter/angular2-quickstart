import {Injectable} from 'angular2/core';
import {Hero} from '../model/hero'
import {HEROES} from '../test/mock-heroes';

@Injectable()
export class HeroService {
    
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    
    getHero(id: number){
        return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    
    // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => 
        setTimeout(()=>resolve(HEROES), 6000) // 2 seconds
    );
  }
    
}