import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'add-user',component:AddUserComponent}
];
