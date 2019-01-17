import { LayoutActions, LayoutActionTypes } from "../actions/layout";
import { state } from "@angular/animations";

export interface State {
    showSideNav: string
}

const initialState: State = {
    showSideNav: 'close'
}

export function reducer(state: State = initialState, action: LayoutActions): State {
    switch (action.type) {
        case LayoutActionTypes.OpenSideNav:
            return {
                ...state,
                showSideNav: 'open'
            }
        case LayoutActionTypes.CloseSideNav:
            return {
                ...state,
                showSideNav: 'close'
            }
        default:
            return state
    }
}

export const getShowSideNav = (state: State) => state.showSideNav