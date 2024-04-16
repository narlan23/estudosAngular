import { Component } from "@angular/core";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list-page.component.html'
})
export class ClientListPage{
  clientPremium = false;

  clients = [{id: 1, nome:'Cliente 1'},{id: 2,nome:'Cliente 2'}]

}
