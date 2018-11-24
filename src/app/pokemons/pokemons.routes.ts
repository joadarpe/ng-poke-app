import { Routes } from '@angular/router';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './containers/pokemon-detail/pokemon-detail.component';


export const PokemonsRoutes: Routes = [
    {
        path: '',
        component: PokemonListComponent
    },
    {
        path: 'detail/:id',
        component: PokemonDetailComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
]