import { Routes } from '@angular/router';
import { FavoriteListComponent } from './containers/favorite-list/favorite-list.component';


export const FavoritesRoutes: Routes = [
    {
        path: '',
        component: FavoriteListComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
]