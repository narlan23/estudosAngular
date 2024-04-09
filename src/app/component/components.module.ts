import { Component, NgModule } from "@angular/core";
import { headerComponent } from "./header.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    headerComponent
  ],
  exports: [
    headerComponent
  ]
})
export class ComponentModule{

}
