import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserModel } from './models/AuthUserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    constructor(private http:HttpClient){}

    authUser(data:any):Observable<any>{
      console.log(data);
      
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8').set('Authorization', `Bearer ${localStorage.getItem('token')}`);

         return this.http.post<AuthUserModel>('https://dummyjson.com/auth/login',data,{headers})
    }

 
}