import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './component/header.component';
import { ComponentModule } from './component/components.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './page/binding-page.component';
import { ClientListPage } from './page/client-list-page.component';
import { CustomUpperCasePipe } from './pipes/custom.uppercase.pipe';
import { filho1PageComponent } from './page/filho1.page.component';
import { filho2PageComponent } from './page/filho2.page.component';
import { PaiPageComponent } from './page/pai.component';
import { loginPageComponent } from './page/login.page.component';
import { ClienteDetalhePageComponent } from './page/ClienteDetalhePageComponent';
import { RXJSPageComponent } from './page/rxjs-page.component';
import { ListaPessoasPage } from './page/lista-pessoas.page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent,
    ClientListPage,
    CustomUpperCasePipe,
    PaiPageComponent,
    filho1PageComponent,
    filho2PageComponent,
    loginPageComponent,
    ClienteDetalhePageComponent,
    RXJSPageComponent,
    ListaPessoasPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
