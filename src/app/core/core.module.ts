import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { LeftAsideComponent } from './containers/left-aside/left-aside.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AsideHeaderComponent } from './components/aside-header/aside-header.component';
import { TopNavBarSearchComponent } from './components/top-nav-bar-search/top-nav-bar-search.component';

@NgModule({
  declarations: [CoreComponent, TopNavBarComponent, LeftAsideComponent, MainContentComponent, MainMenuComponent, AsideHeaderComponent, TopNavBarSearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
