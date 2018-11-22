import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../../models/classes/Pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {let id: string
    this.route.params.subscribe((params: Params) => id = params.id)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(r => r.json()).then(json => {
      this.pokemon = json
    });
  }

}
