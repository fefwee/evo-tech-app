import { AuthUserModel } from './../models/AuthUserModel';
import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext,} from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { AuthUserAction } from '../actions/auth.action';


export class AuthUserModelProfile {
  userProfile:any
  login!:string
}
@State<AuthUserModelProfile>({
  name: 'userstate',
  defaults: {
    userProfile:null,
    login:''
  },
})
@Injectable()
export class UsersState {
  constructor(private service: AuthService) {}


  @Selector()
  static getUserProfileSelector(state: AuthUserModelProfile) {
    return state.userProfile;
  }

@Action(AuthUserAction)
authUserAction({getState,setState}:StateContext<AuthUserModelProfile>,{payload}:AuthUserAction){
return this.service.authUser(payload).pipe(tap((res)=>{
  const state = getState()
  localStorage.setItem('id',res.id) 
  localStorage.setItem('token',res.token) 
  console.log('state')
  setState({
    ...state,
    userProfile:res,
    login:res.username
  })
}))  
 
  
}

}
