import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NovoProdutoComponent } from './views/novo-produto/novo-produto.component';
import { CustomerComponent } from './views/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NovoProdutoComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
