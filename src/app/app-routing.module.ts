import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './page/client-list-page.component';
import { filho1PageComponent } from './page/filho1.page.component';
import { filho2PageComponent } from './page/filho2.page.component';
import { PaiPageComponent } from './page/pai.component';

const routes: Routes = [
  {path: 'client',
  component:ClientListPage},
  {path:'pai',component:PaiPageComponent,
    children: [
      {path:'filho1',component: filho1PageComponent},
      {path:'filho2',component: filho2PageComponent}
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
