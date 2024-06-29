import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { UsersManagementComponent } from "./users.management.component";

export const usersManagementRoutes: Routes = [
    {
        path: '', component: UsersManagementComponent,
        children: [
            { path: 'login', component: LoginComponent }
        ]
    },


];