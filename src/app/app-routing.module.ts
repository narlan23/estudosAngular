import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './page/client-list-page.component';
import { filho1PageComponent } from './page/filho1.page.component';
import { filho2PageComponent } from './page/filho2.page.component';
import { PaiPageComponent } from './page/pai.component';
import { UserGuard } from './guards/user.guard';
import { loginPageComponent } from './page/login.page.component';
import { ClienteDetalhePageComponent } from './page/ClienteDetalhePageComponent';
import { RXJSPageComponent } from './page/rxjs-page.component';
import { ListaPessoasPage } from './page/lista-pessoas.page.component';
import { userPage } from './page/user-page.component';

const routes: Routes = [
  {path: 'client',component:ClientListPage,canActivate: [UserGuard]},

  {path:'pai',component:PaiPageComponent,
    children: [
      {path:'filho1',component: filho1PageComponent},
      {path:'filho2',component: filho2PageComponent}
    ]
  },
  {path:'login',component:loginPageComponent},
  {path:'client/detalhe/:id',component:ClienteDetalhePageComponent},
  {path:'rxjs',component:RXJSPageComponent},
  {path:'listClient',component:ListaPessoasPage},
  {path:'userlist',component:userPage}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
