import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { FavoritesService } from 'src/app/favorites/service/favorites.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
  }

  addFavorite() {
    this.favoritesService.addFavorite(this.pokemon);
  }

}
