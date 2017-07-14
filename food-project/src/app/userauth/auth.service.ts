import * as fires from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signup(email: string, password: string){
    fires.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signin(email: string, password: string) {
    fires.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        this.router.navigate(['/']);
        fires.auth().currentUser.getIdToken()
          .then(
            (tok: string) => this.token = tok
          )
      }
    )
      .catch(
        error => console.log(error)
      );
  }

  getTok() {
    fires.auth().currentUser.getIdToken()
      .then(
        (tok: string) => this.token = tok
      );
    return this.token;
  }

  isAuths() {
    return this.token != null;
  }

  logOut() {
    fires.auth().signOut();
    this.token = null;
  }

}
