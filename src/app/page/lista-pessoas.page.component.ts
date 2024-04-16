import { Component, OnInit } from "@angular/core";
import { PessoaService } from "../service/pessoa.service";
import { Observable } from "rxjs";
import { Pessoa } from "../moldel/pessoa";
@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoas.page.component.html'
})
export class ListaPessoasPage implements OnInit{

  pessoas!: Observable<Pessoa[]>

  constructor (private service:PessoaService){}
  ngOnInit(): void {

  }
  salva(pessoa:Pessoa){
    this.service.salvar(pessoa)
  }
  listar(){
    this.pessoas = this.service.listar()
  }
}
