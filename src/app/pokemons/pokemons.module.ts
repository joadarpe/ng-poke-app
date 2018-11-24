import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonListCardComponent } from './components/pokemon-list-card/pokemon-list-card.component';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import { PokemonsRoutes } from './pokemons.routes';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PokemonListCardComponent, PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(PokemonsRoutes)
  ]
})
export class PokemonsModule { }
