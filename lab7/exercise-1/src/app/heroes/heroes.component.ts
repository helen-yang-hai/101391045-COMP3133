import { Component } from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'
import {NgFor} from '@angular/common'
import {NgIf} from '@angular/common'

@Component({
  //standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  //imports: [NgFor],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
