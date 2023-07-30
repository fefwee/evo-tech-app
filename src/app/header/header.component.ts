import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UsersState } from '../states/auth-user.state';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { StateResetAll } from 'ngxs-reset-plugin';

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

  constructor(
    private store: Store,
    private service: AuthService,
    private router: Router
  ) {
    store.select(UsersState.getUserProfileSelector).subscribe((res) => {
      this.login$ = res.login;
      this.role$ = res.role;
    });
  }

  public logOut() {
    this.store.dispatch(
      new StateResetAll()
    )
    this.router.navigate(['auth']);
  }

  public toggleCloseBtn() {
    this.show = !this.show;
  }


  ngOnInit(): void {
   /*  if(!this.login$){
      this.router.navigate(['auth'])
    } */
  }
}
