import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";


@Injectable()
export class AuthProtect implements CanActivate {

  constructor(private authservice: AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authservice.isAuths();
  }
}
