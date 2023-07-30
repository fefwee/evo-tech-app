import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserAction } from '../actions/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  private bayer = {
    username: 'atuny0',
    password: '9uQFF1Lh',
  };
  private admin = {
    username: 'hbingley1',
    password: 'CQutx25i8r',
  };

  public form!: FormGroup;
  public title: string = 'Вход в личный кабинет';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(5),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  login(data: any) {
    if (
      JSON.stringify(data) === JSON.stringify(this.bayer) ||
      JSON.stringify(data) === JSON.stringify(this.admin)
    ) {
      this.store.dispatch(new AuthUserAction(data));  
    }
 
  }
}
