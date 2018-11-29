import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {

  _pokemon: Pokemon

  @Input()
  set pokemon(pokemon: Pokemon) {
    this._pokemon = pokemon
    if (pokemon)
      this.loadDescription(pokemon.name)
  }

  get pokemon(): Pokemon {
    return this._pokemon
  }

  description: string

  constructor(private pokedex: PokedexService) { }

  ngOnInit() {

  }

  loadDescription(name: string) {
    this.pokedex.getPokemonSpeciesByName(name).then(s =>
      this.description = this.pokedex.findTextByLanguage(s.flavor_text_entries))
  }

}
