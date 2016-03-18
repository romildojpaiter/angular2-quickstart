import {Component} from 'angular2/core';
import {Hero} from './model/hero';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    template: `
    <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <div><input [(ngModel)]="hero.name" placeholder="name"></div>
                <div><input type="button" value="clear" (click)="onClear()"></div>
            </div>
    </div>
    `
})

export class HeroDetailComponent {
    
    hero: Hero;
    
    onClear(){
        this.hero = null;
    }
    
}