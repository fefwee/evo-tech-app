import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthUserAction } from '../actions/auth.action';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  public form!: FormGroup;
  public title: string = 'Вход в личный кабинет';
  

  constructor(private store:Store,private authservice: AuthService){}
 

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',
      [Validators.minLength(3),Validators.required]),
      password: new FormControl('',
      [Validators.required,Validators.minLength(5)]),}
    );
 
     
  }

  submit(data:any) {
  this.store.dispatch(new AuthUserAction(data))

}}
