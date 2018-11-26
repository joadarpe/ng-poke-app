import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './containers/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutes)
  ]
})
export class AuthModule { }
