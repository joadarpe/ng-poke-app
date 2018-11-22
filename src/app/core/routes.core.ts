import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


export const routes: Routes = [
    {
        path: 'main',
        component: PokemonListComponent
    },
    {
        path: 'detail/:id',
        component: PokemonDetailComponent
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    }
]