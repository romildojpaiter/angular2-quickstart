import {Injectable} from 'angular2/core';
import {Hero} from '../model/hero'
import {HEROES} from '../test/mock-heroes';

@Injectable()
export class HeroService {
    
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    
    // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => 
        setTimeout(()=>resolve(HEROES), 6000) // 2 seconds
    );
  }
    
}