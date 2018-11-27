import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { CollectionDetailComponent } from './containers/collection-detail/collection-detail.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { CollectionsRoutes } from './collections.routes';
import { CollectionCardComponent } from './components/collection-card/collection-card.component';

@NgModule({
  declarations: [CollectionListComponent, CollectionDetailComponent, CollectionCardComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(CollectionsRoutes)
  ]
})
export class CollectionsModule { }
