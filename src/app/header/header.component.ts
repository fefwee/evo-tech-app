import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UsersState } from '../states/auth-user.state';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  public login$!:string
  public token$!:string
  public role$!:string
 
 
  constructor(private store:Store, private service:AuthService,private router:Router ){
     store.select(UsersState.getUserProfileSelector).subscribe((res)=>{
     this.login$  = res.login
     this.token$ = res.token
     this.role$ = res.role
    })
  }

  public logOut () {
    this.service.logOut()
     this.login$ = ''
     this.token$ = ''
     this.role$ = ''
     this.router.navigate(['/sign-in'])
  }
  


  ngOnInit(): void {}
}
