import { Action } from "@ngrx/store";
import { ILogin } from "../models/interfaces/auth";
import { UserInfo } from "firebase";

export enum AuthActionTypes {
    Login = '[Auth] Do Login',
    LoginSuccessful = '[Auth] Login Successful',
    LoginError = '[Auth] Login Error'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login

    constructor(public credentials: ILogin) { }
}

export class LoginSuccessful implements Action {
    readonly type = AuthActionTypes.LoginSuccessful

    constructor(public user: UserInfo) { }
}

export class LoginError implements Action {
    readonly type = AuthActionTypes.LoginError

    constructor(public errorInfo: any) { }
}

export type AuthActions =
    | Login
    | LoginSuccessful
    | LoginError