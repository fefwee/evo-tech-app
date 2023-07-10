import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthUserAction } from '../actions/auth.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  public form!: FormGroup;
  public title: string = 'Вход в личный кабинет';
  

  constructor(private store:Store,private router:Router){}
 

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',
      [Validators.minLength(3),Validators.required]),
      password: new FormControl('',
      [Validators.required,Validators.minLength(5)]),}
    );
 
     
  }

  login(data:any) {
  this.store.dispatch(new AuthUserAction(data))
  console.log('dispatch');
  
  this.router.navigate(['app-personal-area']) 
  

}


}
