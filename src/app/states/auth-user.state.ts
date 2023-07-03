import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthUserModel } from '../models/AuthUserModel';
import { AuthService } from '../auth.service';
import { AuthUserAction } from '../actions/auth.action';

@State<AuthUserModel>({
  name: 'userstate',
  defaults: {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: '',
  },
})
@Injectable()
export class UsersState {
  constructor(private service: AuthService) {}
  @Selector()
  static getUserProfileSelector(state: AuthUserModel) {
    return state;
  }

  @Action(AuthUserAction)
  getProfileUserAction(
    ctx: StateContext<AuthUserModel>,
    action: AuthUserAction
  ) {
    return this.service.authUser(action.payload).pipe(
      tap((res) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          id:res.id,
          username:res.username,
          email:res.email,
          firstName:res.firstName,
          lastName:res.lastName,
          gender:res.gender,
          image:res.image,
          token:res.token,
        });
      })
    );
  }
}
