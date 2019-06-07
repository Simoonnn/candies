import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';

const routes: Routes = [
  {path: 'about' , component: AboutComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
