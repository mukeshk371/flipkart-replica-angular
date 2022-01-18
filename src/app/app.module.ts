import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
