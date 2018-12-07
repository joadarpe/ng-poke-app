import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './containers/favorite-list/favorite-list.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { FavoritesRoutes } from './favorites.routes';

@NgModule({
  declarations: [FavoriteListComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(FavoritesRoutes)
  ]
})
export class FavoritesModule { }
