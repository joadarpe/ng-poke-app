import { Routes } from '@angular/router';
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { CollectionDetailComponent } from './containers/collection-detail/collection-detail.component';


export const CollectionsRoutes: Routes = [
    {
        path: '',
        component: CollectionListComponent
    },
    {
        path: 'detail/:id',
        component: CollectionDetailComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
]