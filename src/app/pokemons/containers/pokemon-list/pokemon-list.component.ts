import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { Paginator } from 'src/app/core/services/Paginator';
import { NamedAPIResource } from 'src/app/core/models/classes/NamedAPIResource';
import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';
import { PokemonService } from 'src/app/core/services/pokemon/pokemon.service';

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

  pokemonsResult: NamedAPIResource[]
  pokemons: Pokemon[] = []
  paginator: Paginator = new Paginator();

  constructor(private pokemonsService: PokemonService, private pokedex: PokedexService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe(ps => {
      this.pokemonsResult = ps
      this.loadPokemons(this.pokemonsResult)
    })
  }

  doSearch(filter: string) {
    this.paginator.actualPage = 1
    let results = this.pokemonsResult
    if (filter)
      results = this.pokemonsResult.filter(s => s.name.toLowerCase().includes(filter))
    this.loadPokemons(results)
  }

  loadPage(page: number) {
    this.paginator.actualPage = page
    this.loadPokemons(this.pokemonsResult)
  }

  loadPokemons(results: NamedAPIResource[]) {
    this.pokemons = []
    let pageResults = this.paginator.loadActualPage(results)
    pageResults.forEach(r => this.loadPokemonInfo(this.pokemons, r))
  }

  loadPokemonInfo(ps: any[], r: NamedAPIResource) {
    this.pokedex.getPokemonByName(r.name).then(p => ps.push(p));
  }

}
