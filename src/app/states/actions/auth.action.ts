import { AuthParams } from 'src/app/models/AuthUserModel';

export class AuthUserAction {
  static readonly type = '[User] Get Profile user';

  constructor(public payload: AuthParams) {}
}
