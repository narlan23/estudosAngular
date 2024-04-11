import { Component } from "@angular/core";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-page.component.html'
})
export class ClientListPage{
  clientPremium = false;

  clients = ['Cliente 1','Cliente 2']

}
