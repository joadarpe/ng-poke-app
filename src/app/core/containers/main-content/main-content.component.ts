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
    this.doSearch((value) ? value.toLowerCase() : value)
  }

  pokemons: Pokemon[]
  pages: number[]
  actualPage: number = 1

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

  setPage(page: number) {
    this.actualPage = page
    this.loadPokemons(pokemons.results)
  }

  loadPokemons(results: Result[]) {
    this.pokemons = []
    let pageResults = this.loadActualPagePokemons(results, 12)
    pageResults.forEach(r => this.loadPokemonInfo(this.pokemons, r))
    this.pokemons = this.pokemons.sort((p1, p2) => p1.id - p2.id)
  }

  loadActualPagePokemons(results: Result[], pageSize: number): Result[] {
    let resultSize = results.length
    this.loadPages(resultSize, pageSize)
    let startIndex = (this.actualPage - 1) * pageSize
    let endIndex = Math.min(this.actualPage * pageSize, resultSize)
    return results.slice(startIndex, endIndex)
  }

  loadPokemonInfo(ps: any[], r: Result) {
    fetch(r.url).then(r => r.json()).then(json => ps.push(json));
  }

  loadPages(totalCount: number, pageSize: number) {
    this.pages = []
    let totalPages = Math.ceil(totalCount / pageSize)
    for (let index = 1; index <= totalPages; index++)
      this.pages.push(index)
  }

}
