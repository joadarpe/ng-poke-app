import { Component, OnInit, Input } from '@angular/core';
import { pokemons } from '../../data/pokemon'
import { Pokemon } from '../../models/classes/Pokemon';
import { Result } from '../../models/classes/Results';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  _searchFilter: string;

  @Input()
  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value
    this.doSearch((value) ? value.toLowerCase(): value)
  }

  pokemons: Pokemon[]

  constructor() {
  }

  ngOnInit() {
    this.loadPokemons(pokemons.results)
  }

  doSearch(filter: string) {
    let results = pokemons.results
    if (filter)
      results = pokemons.results.filter(s => s.name.toLowerCase().includes(filter))
    this.loadPokemons(results)
  }

  loadPokemons(results: Result[]) {
    this.pokemons = []
    results.forEach(r => this.loadPokemonInfo(this.pokemons, r))
    this.pokemons = this.pokemons.sort((p1, p2) => p1.id - p2.id)
  }

  loadPokemonInfo(ps: any[], r: Result) {
    fetch(r.url).then(r => r.json()).then(json => ps.push(json));
  }

}
