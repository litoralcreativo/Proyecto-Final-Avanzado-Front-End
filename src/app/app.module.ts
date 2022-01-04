import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { AccountModule } from './features/account/account.module';
import { HomeModule } from './features/home/home.module';
import { NotFoundComponent } from './common/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AccountModule,
    HomeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
