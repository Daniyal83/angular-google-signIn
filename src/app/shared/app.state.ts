import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AppStateModel } from '../models/stateModel';
import { SignIn, SignOut } from './app.actions';

@State<AppStateModel>({
    name: 'UserState',
    defaults: {
        user: null,
        isLogged: false
    }
  })
@Injectable()

export class UserState {
    @Selector()
    static user(state: AppStateModel) {
        return state.user;
    }

    @Selector()
    static isLogged(state: AppStateModel) {
        return state.isLogged;
    }

    @Action(SignIn)
    SignIn({ setState }: StateContext<AppStateModel>, { payload }: SignIn) {
        setState({ isLogged: true, user: {...payload}})
    }

    @Action(SignOut)
    SignOut({ setState }: StateContext<AppStateModel>, {}: SignOut) {
        setState({ isLogged: false, user: null})
    }
}