import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: './core/core.module#CoreModule'
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }
]
