import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {PolicyComponent} from './policy/policy.component';

const routes: Routes = [
  {path: 'about' , component: AboutComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
