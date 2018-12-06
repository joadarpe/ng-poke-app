import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ILogin, Login } from '../../models/interfaces/auth';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() loginEmitter: EventEmitter<ILogin> = new EventEmitter<ILogin>()

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  submit() {
    this.loginEmitter.emit(this.loginForm.value)
  }

}
