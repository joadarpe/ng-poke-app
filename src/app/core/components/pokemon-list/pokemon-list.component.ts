import { Component, OnInit, Input } from '@angular/core';
import { pokemons } from '../../data/pokemon'
import { Pokemon } from '../../models/classes/Pokemon';
import { Result } from '../../models/classes/Results';
import { Paginator } from '../../services/Paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  _searchFilter: string;

  @Input()
  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value
    this.doSearch((value) ? value.toLowerCase() : value)
  }

  pokemons: Pokemon[] = []
  paginator: Paginator = new Paginator();

  constructor() { }

  ngOnInit() {
    this.loadPokemons(pokemons.results)
  }

  doSearch(filter: string) {
    let results = pokemons.results
    if (filter)
      results = pokemons.results.filter(s => s.name.toLowerCase().includes(filter))
    this.loadPokemons(results)
  }

  loadPage(page: number) {
    this.paginator.actualPage = page
    this.loadPokemons(pokemons.results)
  }

  loadPokemons(results: Result[]) {
    this.pokemons = []
    let pageResults = this.paginator.loadActualPage(results)
    pageResults.forEach(r => this.loadPokemonInfo(this.pokemons, r))
    this.pokemons = this.pokemons.sort((p1, p2) => p1.id - p2.id)
  }

  loadPokemonInfo(ps: any[], r: Result) {
    fetch(r.url).then(r => r.json()).then(json => ps.push(json));
  }

}