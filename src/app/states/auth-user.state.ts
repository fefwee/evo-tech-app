import { Injectable, NgZone } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AuthUserAction } from './actions/auth.action';
import { Router } from '@angular/router';
import { AuthUserModel } from '../models/AuthUserModel';

export class AuthUserModelProfile {
  userProfile!: AuthUserModel;
  login!: string;
  token!: string;
  role!: string;
}
@State<Partial<AuthUserModelProfile>>({
  name: 'userstate',
  defaults: undefined,
})
@Injectable()
export class UsersState {
  constructor(
    private service: AuthService,
    private router: Router,
    private zone: NgZone
  ) {}

  @Selector()
  static getUserProfileSelector(state: AuthUserModelProfile) {
    return state;
  }

  @Action(AuthUserAction)
  authUserAction(
    { getState, setState }: StateContext<AuthUserModelProfile>,
    { payload }: AuthUserAction
  ) {
    return this.service.login(payload).pipe(
      tap((res) => {
        const state = getState();
        const role = this.service.checkRole(res.username);
        setState({
          ...state,
          userProfile: res,
          login: res.username,
          token: res.token,
          role: role,
        });
        this.zone.run(() => {
          this.router.navigate(['profile']);
        });
      })
    );
  }
}
