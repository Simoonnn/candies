import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {CanActivateCreateGuard} from './can-activate-create.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'create', component: CreateComponent, canActivate: [CanActivateCreateGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
