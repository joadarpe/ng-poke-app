import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ILogin } from '../models/interfaces/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLogged: boolean

  constructor(private authFire: AngularFireAuth, private router: Router) {
    authFire.authState.subscribe(
      auth => {
        this._isLogged = auth ? true : false
      }
    )
  }

  loginWithEmail(auth: ILogin) {
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password)
  }

  loginWithGoogle() {
    return this.authFire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

  logOut() {
    localStorage.removeItem('ng-poke-app')
    this.authFire.auth.signOut()
      .then(_ => this.router.navigate(['login']))
  }

  profileUser() {
    return this.authFire.authState
  }

  isLoggedIn(): boolean {
    return this._isLogged
  }

}
