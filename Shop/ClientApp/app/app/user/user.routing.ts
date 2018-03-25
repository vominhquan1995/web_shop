import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
const router: Routes = [
    {
        path: '',
        component: UserComponent,
    }
];
export const UserRouting = RouterModule.forChild(router);