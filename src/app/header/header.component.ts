import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UsersState } from '../states/auth-user.state';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public login$!: any;
  public authorization!:boolean
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
    this.service.logOut();
    this.login$ = '';
    this.role$ = '';
    this.router.navigate(['/sign-in']);
  }

  public toggleCloseBtn() {
    this.show = !this.show;
  }

  public isAuthorizated (){
   let isAuth = this.service.isAuthorizated();
    return isAuth
  
  }

  ngOnInit(): void {
    this.login$ = localStorage.getItem('login');
      this.role$ =localStorage.getItem('role');
  }
}
