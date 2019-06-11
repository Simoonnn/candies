import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {PolicyComponent} from './policy/policy.component';
import {DisplayComponent} from './display/display.component';

const routes: Routes = [
  {path: 'shop', component: DisplayComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '**', redirectTo: '/shop', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
