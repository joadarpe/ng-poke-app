import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: 'main',
        loadChildren: './core/core.module#CoreModule'
    },
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }
]
