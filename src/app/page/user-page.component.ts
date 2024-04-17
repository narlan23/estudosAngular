import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../moldel/user";
import { UserService } from "../service/users.service";
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})

export class userPage implements OnInit{

  users!: Observable<User[]>

  constructor (private service:UserService){}

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  editar(user:User){
    const editado = user;
    editado.name = "New name"
    this.service.putUser(user.id,editado);
  }

  novoUser(){
    const user: User = {
      id: 55555,
      name: "Novo Usuario",
      email: "novo.novo@novo.com"
    }

    this.service.postUser(user);
  }
  deletar(user:User){
    this.service.deleteUser(user.id)
  }

}
