import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-estudos-angular';
  descricao = "Descrição do item 1";

  clientPremium = true;

  togglePremiumStatus() {
    this.clientPremium = !this.clientPremium;
  }

  valores = [{
    id: '01',
    nome: 'nome',
    descricao: 'teste'

  }]
}
