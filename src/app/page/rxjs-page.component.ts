import { Component, OnInit } from "@angular/core";
import { Subscription, interval, of } from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl : './rxjs-page.component.html'
})
export class RXJSPageComponent implements OnInit{

  items: Array<number> = []

  subsciption! : Subscription

  observable = interval (1000)

  constructor(){}

  ngOnInit() {
    this.subsciption = this.observable.subscribe(item => {
      this.items.push(item);
    });

  }

  desinscrever (){
    this.subsciption.unsubscribe()
  }
}
