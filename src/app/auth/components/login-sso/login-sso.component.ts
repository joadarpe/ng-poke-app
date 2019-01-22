import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ILogin } from '../../models/interfaces/auth';

@Component({
  selector: 'app-login-sso',
  templateUrl: './login-sso.component.html',
  styleUrls: ['./login-sso.component.css']
})
export class LoginSsoComponent implements OnInit {

  @Output() signByGoogle: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  signWithGoogle() {
    this.signByGoogle.emit(true)
  }

}
