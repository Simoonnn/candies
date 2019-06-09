import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [LoginComponent, CreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
]
})
export class AdminModule { }
