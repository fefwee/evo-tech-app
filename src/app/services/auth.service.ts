import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthParams, AuthUserModel } from '../models/AuthUserModel';
import { Store } from '@ngxs/store';
import { UsersState } from '../states/auth-user.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private domainLogin: string | undefined;
  private domainUser: string | undefined;
  constructor(private http: HttpClient, private store: Store) {
    this.domainLogin = environment.domainLogin;
    this.domainUser = environment.domainUsers;
  }

  public login(data: AuthParams): Observable<AuthUserModel> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post<AuthUserModel>(`${this.domainLogin}`, data, {
      headers,
    });
  }

  public getFullUser(id: number): Observable<any> {
    return this.http.get(`${this.domainUser}${id}`);
  }

  public checkRole(role: string) {
    if (role === 'atuny0') {
      return 'Покупатель';
    } else if (role === 'hbingley1') {
      return 'Администратор';
    }
    return role;
  }
  public isLoggedIn() {
    let token = null;
    this.store.select(UsersState.getUserProfileSelector).subscribe((res) => {
      if (res) token = res.token;
    });
    return token ? true : false;
  }
}
