import { Routes } from '@angular/router';
import { usersManagementRoutes } from './features/users-management/users.management.config';

export const routes: Routes = [
    
    //Rutas para el feature UsersManagement
    ...usersManagementRoutes
    
    //  { path: '**', component: PageNotFoundComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
