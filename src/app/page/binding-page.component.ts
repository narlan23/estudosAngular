import { Component } from "@angular/core";

@Component({
  selector: 'app-binding',
  template: `
    <h1>Imagem do Angular</h1>
    <img [src]="imagem" [style]="{width:width}" />

    <div class="alert" [class]="{success:sucesso}">Alerta</div>

    <button (click)="enviarDados()">Enviar Dados</button>
  `,
  styles: [
    '.alert { width: 200px; height: 100px; border: 1px solid blue; }',
    '.success { background-color: green; }'
  ]

})
export class BindingPageComponent{
  width = "300px"
  imagem = "https://angular.io/assets/images/logos/angular/angular.svg"
  sucesso = true

  enviarDados(){
    this.sucesso = !this.sucesso
  }

}
