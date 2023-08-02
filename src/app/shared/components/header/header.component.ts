import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UsersState } from '../../../states/auth-user.state';
import { Router } from '@angular/router';
import { StateClear } from 'ngxs-reset-plugin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public login$!: any;
  public authorization!: boolean;
  public role$!: any;
  public show = false;

  constructor(private store: Store, private router: Router) {
    store.select(UsersState.getUserProfileSelector).subscribe((res) => {
      if (res) {
        this.login$ = res.login;
        this.role$ = res.role;
      }
      else{
        this.login$ = false
      }
    });
  }

  public logOut() {
    this.store.dispatch(new StateClear());
    this.router.navigate(['auth']);
  }

  public toggleCloseBtn() {
    this.show = !this.show;
  }

  ngOnInit(): void {}
}
