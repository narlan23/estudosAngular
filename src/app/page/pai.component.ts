import { Component } from "@angular/core";

@Component({
  selector: 'app-pai',
  template: `
    <h1>No Componente Pai</h1>
    <a [routerLink]="['filho1']">Ir para componente filho1</a> <br/>
    <a [routerLink]="['filho2']">Ir para componente filho2</a> <br/>
    <router-outlet></router-outlet>
  `
})
export class PaiPageComponent{

}
