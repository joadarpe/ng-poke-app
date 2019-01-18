import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './containers/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { AlertsModule } from '../alerts/alerts.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes),
    StoreModule.forFeature('auth', reducers),
    AlertsModule
  ]
})
export class AuthModule { }
