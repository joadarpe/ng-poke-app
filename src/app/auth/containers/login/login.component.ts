import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../../models/interfaces/auth';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../reducers";
import * as Auth from "../../actions/auth";
import { Observable } from 'rxjs';
import { UserInfo } from 'firebase';
import { MessagesService } from 'src/app/alerts/services/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean> = this.store.pipe(select(fromAuth.getLoading))
  loggedIn$: Observable<boolean> = this.store.pipe(select(fromAuth.getLoggedIn))
  error$: Observable<any> = this.store.pipe(select(fromAuth.getError))

  constructor(private store: Store<fromAuth.State>, private authService: AuthService, private msgService: MessagesService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.loading$.subscribe(e => this.msgService.message({ msg: 'Loading', type: 'success' }))
    this.loggedIn$.subscribe(e => this.msgService.message({ msg: 'Login successful', type: 'success' }))
    this.error$.subscribe(e => this.msgService.message({ msg: e, type: 'error' }))
  }

  auth(event: ILogin) {
    if (event) {
      this.store.dispatch(new Auth.Login(event))
      this.authService.loginWithEmail(event)
        .then(user => {
          localStorage.setItem('ng-poke-app', JSON.stringify(user))
          this.store.dispatch(new Auth.LoginSuccessful(<UserInfo>user.user.toJSON()))
          this.router.navigate(['main'])
        }, error => {
          this.store.dispatch(new Auth.LoginError(error))
        })
    }
  }

  signWithGoogle(event) {
    if (event)
      this.authService.loginWithGoogle()
        .then(user => {
          localStorage.setItem('ng-poke-app', JSON.stringify(user))
          this.zone.run(_ => this.router.navigate(['main']))
        })
  }

}
