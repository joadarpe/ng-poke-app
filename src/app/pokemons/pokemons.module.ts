import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import { PokemonsRoutes } from './pokemons.routes';
import { CoreModule } from '../core/core.module';
import { DetailContentComponent } from './components/detail-content/detail-content.component';
import { SimilarContentComponent } from './components/similar-content/similar-content.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, DetailContentComponent, SimilarContentComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(PokemonsRoutes)
  ]
})
export class PokemonsModule { }
