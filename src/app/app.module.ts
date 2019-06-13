import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PolicyComponent } from './policy/policy.component';
import { DisplayComponent } from './display/display.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FaqComponent,
    DeliveryComponent,
    PolicyComponent,
    DisplayComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
