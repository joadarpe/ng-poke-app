import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { Paginator } from 'src/app/core/services/Paginator';
import { pokemons } from 'src/app/core/data/pokemon';
import { NamedAPIResource } from 'src/app/core/models/classes/NamedAPIResource';

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
    this.paginator.actualPage = 1
    let results = pokemons.results
    if (filter)
      results = pokemons.results.filter(s => s.name.toLowerCase().includes(filter))
    this.loadPokemons(results)
  }

  loadPage(page: number) {
    this.paginator.actualPage = page
    this.loadPokemons(pokemons.results)
  }

  loadPokemons(results: NamedAPIResource[]) {
    this.pokemons = []
    let pageResults = this.paginator.loadActualPage(results)
    pageResults.forEach(r => this.loadPokemonInfo(this.pokemons, r))
  }

  loadPokemonInfo(ps: any[], r: NamedAPIResource) {
    fetch(r.url).then(r => r.json()).then(json => ps.push(json));
  }

}