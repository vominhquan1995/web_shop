import { Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
export const routes: Routes = [
    //module user
    {
        path: '', loadChildren: './app/user/user.module#UserModule'
    },

]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);