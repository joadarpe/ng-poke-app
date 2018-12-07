import { Routes } from '@angular/router';
import { CoreComponent } from './containers/core/core.component';

export const CoreRoutes: Routes = [
    {
        path: 'main',
        component: CoreComponent,
        children: [
            {
                path: 'pokemons',
                loadChildren: '../pokemons/pokemons.module#PokemonsModule'
            },
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule'
            },
            {
                path: 'favorites',
                loadChildren: '../favorites/favorites.module#FavoritesModule'
            }
        ]
    }/*,
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }*/
]