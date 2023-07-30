import { environment } from './../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserModel } from './models/AuthUserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private domainLogin: string | undefined;
  private domainUser: string | undefined;
  constructor(private http: HttpClient) {
    this.domainLogin = environment.domainLogin;
    this.domainUser = environment.domainUsers;
  }

  public login(data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.http.post<AuthUserModel>(`${this.domainLogin}`, data, {
      headers,
    });
  }

  public getFullUser(id: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
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
}
