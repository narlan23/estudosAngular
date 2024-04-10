import { CurrencyPipe } from '@angular/common';
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

  nome = "Narlan Mota"

  togglePremiumStatus() {
    this.clientPremium = !this.clientPremium;
  }

  valores = [{
    id: '01',
    nome: 'nome',
    descricao: 'teste'

  },{
    id: '02',
    nome: 'nome',
    descricao: 'teste'}]

    umaData = new Date()
    umDinheiro = 10.5

    adicionar(){
      this.valores.push({id: '02',nome: 'nome',descricao: 'teste'})
    }
}
