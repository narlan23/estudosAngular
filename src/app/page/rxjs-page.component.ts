import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Subscription, interval, of } from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl : './rxjs-page.component.html'
})
export class RXJSPageComponent implements OnInit{

  items: Array<number> = []

  subsciption! : Subscription

  observable = interval (1000)
  subject = new BehaviorSubject("Valor inicial")
  ultimoEvento = ""
  cont = 1;

  constructor(){}

  ngOnInit() {
    this.subsciption = this.observable.subscribe(item => {
      this.items.push(item);

      this.subject.asObservable().subscribe(item => {
        this.ultimoEvento = item
      });
    });

  }

  desinscrever (){
    this.subsciption.unsubscribe()
  }

  emitirEvento(){
    this.subject.next("Proximo item" + this.cont)
    this.cont++
  }
}
