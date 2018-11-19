import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../models/classes/Pokemon';

@Component({
  selector: 'app-pokemon-list-card',
  templateUrl: './pokemon-list-card.component.html',
  styleUrls: ['./pokemon-list-card.component.css']
})
export class PokemonListCardComponent implements OnInit {

  @Input()
  pokemon: Pokemon

  constructor() { }

  ngOnInit() {
  }

}
