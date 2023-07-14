import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserModel } from './models/AuthUserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

   public login (data: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
    return this.http.post<AuthUserModel>('https://dummyjson.com/auth/login', data,{ headers }
    );
  }

   public getFullUser(id:any):Observable<any>{
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get(`https://dummyjson.com/users/${id}`)
  }

  public checkRole(role:string){
    if(role === 'atuny0'){
      localStorage.setItem('role','bayer')
    }
    else if (role === 'hbingley1'){
      localStorage.setItem('role','admin')
    }
    return role
  }
  

  public isAdmin () {
    return localStorage.getItem('role') === 'admin' && true
  }
  public isAuthorizated () {
    return localStorage.getItem('token') ? true : false;
  }

}
