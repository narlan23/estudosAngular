import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate{
  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(localStorage.getItem("logado2") === "false"){
      this.router.navigate(['login'])
      return false;
    }
    return true;
  }

}
