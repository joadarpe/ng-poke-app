import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutes } from './core.routes';
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { LeftAsideComponent } from './containers/left-aside/left-aside.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AsideHeaderComponent } from './components/aside-header/aside-header.component';
import { TopNavBarSearchComponent } from './components/top-nav-bar-search/top-nav-bar-search.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EmailPipe } from './components/pipes/email.pipe';
import { OrderByPipe } from './components/pipes/order-by.pipe';
import { CapitalCasePipe } from './components/pipes/capital-case.pipe';
import { AlertsModule } from '../alerts/alerts.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [CoreComponent, TopNavBarComponent, LeftAsideComponent, MainContentComponent, MainMenuComponent, AsideHeaderComponent, TopNavBarSearchComponent, PaginationComponent, EmailPipe, OrderByPipe, CapitalCasePipe, PokemonCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CoreRoutes),
    AlertsModule
  ],
  exports: [
    CoreComponent,
    PaginationComponent,
    PokemonCardComponent,
    OrderByPipe,
    CapitalCasePipe
  ]
})
export class CoreModule { }
