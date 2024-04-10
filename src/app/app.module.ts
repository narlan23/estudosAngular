import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './component/header.component';
import { ComponentModule } from './component/components.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './page/binding-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
