import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUserAction } from '../../states/actions/auth.action';
import { Title } from '@angular/platform-browser';
import { AuthParams } from 'src/app/models/AuthUserModel';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {

  private bayer: AuthParams = {
    username: 'atuny0',
    password: '9uQFF1Lh',
  };
  private admin: AuthParams = {
    username: 'hbingley1',
    password: 'CQutx25i8r',
  };

  public form!: FormGroup;
  public title: string = 'Вход в личный кабинет';

  constructor(private store: Store, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
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

  login(data: AuthParams) {
    
    if (
      JSON.stringify(data) === JSON.stringify(this.bayer) ||
      JSON.stringify(data) === JSON.stringify(this.admin)
    ) {
      this.store.dispatch(new AuthUserAction(data));
    }
  }
}
