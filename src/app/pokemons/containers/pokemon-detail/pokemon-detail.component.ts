import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon
  similars: Pokemon[]

  constructor(private route: ActivatedRoute, private pokedex: PokedexService) {
  }

  ngOnInit() {
    let name: string
    this.route.params.subscribe((params: Params) => name = params.name)
    this.pokedex.getPokemonByName(name).then(p => {
      this.loadSimilarPokemons(p)
      this.pokemon = p
    })
  }

  loadSimilarPokemons(original: Pokemon) {
    this.similars = []
    this.pokedex.getTypeByName(original.types[0].type.name).then(t => {
      let ls = t.pokemon.filter(p => p.pokemon.name != original.name).slice(0, 3)
      ls.forEach(p => this.pokedex.getPokemonByName(p.pokemon.name).then(p => this.similars.push(p)))
    })
  }

}
