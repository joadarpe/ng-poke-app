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
      this.pokemon = p
      this.similars = []
      this.similars.push(p)
      this.similars.push(p)
      //this.similars.push(p)
    })
  }

}
