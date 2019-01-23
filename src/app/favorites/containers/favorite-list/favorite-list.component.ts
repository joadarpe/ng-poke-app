import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/classes/Pokemon';
import { FavoritesService } from '../../service/favorites.service';
import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';
import { Paginator } from 'src/app/core/services/Paginator';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  results: any[] = []
  favorites: Pokemon[] = []
  paginator: Paginator = new Paginator();

  constructor(private favoritesService: FavoritesService, private pokedex: PokedexService) { }

  ngOnInit() {
    this.favoritesService.getFavorites().subscribe(fav => {
      this.results = fav
      this.loadPokemons(this.results)
    })
  }

  loadPage(page: number) {
    this.paginator.actualPage = page
    this.loadPokemons(this.results)
  }

  loadPokemons(results: any[]) {
    this.favorites = []
    let pageResults = this.paginator.loadActualPage(results)
    pageResults.forEach(r => this.loadPokemonInfo(this.favorites, r))
  }

  loadPokemonInfo(ps: any[], r: any) {
    this.pokedex.getPokemonByName(r.name).then(p => {
      ps.push({
        ...p,
        isFavorite: true
      })
    });
  }

}
