import { AuthActionTypes, AuthActions } from "../actions/auth";
import { UserInfo } from "firebase";

export interface State {
    loading: boolean
    loaded: boolean
    error: any | null
    loggedIn: boolean
    user: UserInfo | null
}

export const initialState: State = {
    loading: false,
    loaded: false,
    error: null,
    loggedIn: false,
    user: null
}

export function reducer(state: State = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.Login:
            return {
                ...state,
                loading: true
            }
        case AuthActionTypes.LoginSuccessful:
            return {
                ...state,
                loading: false,
                loaded: true,
                loggedIn: true,
                user: action.user
            }
        case AuthActionTypes.LoginError:
            return {
                ...state,
                loading: false,
                error: action.errorInfo
            }
        default:
            return state
    }
}

export const getLoading = (state: State) => state.loading
export const getLoaded = (state: State) => state.loaded
export const getError = (state: State) => state.error
export const getLoggedIn = (state: State) => state.loggedIn
export const getUser = (state: State) => state.user