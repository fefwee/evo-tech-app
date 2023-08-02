import { IUser } from '../../models/AuthUserModel';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngxs/store';
import { UsersState } from '../../states/auth-user.state';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {
  public title = 'Личный кабинет';
  public isAdmin: boolean = false;
  public id = 0;

  public userInfo: IUser = {
    age: 0,
    ip: 0,
    email: '',
    firstName: '',
    image: '',
  };

  constructor(
    private serviceGetFullUser: AuthService,
    private store: Store,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.store.select(UsersState.getUserProfileSelector).subscribe((res) => {
      if (res) {
        this.id = res.userProfile.id;
        if (res.role === 'Администратор') {
          this.isAdmin = true;
        }
      }
    });
    this.getFullUser();
  }

  public getFullUser() {
    this.serviceGetFullUser.getFullUser(this.id).subscribe((res) => {
      this.userInfo = {
        age: res.age,
        ip: res.ip,
        email: res.email,
        firstName: res.firstName,
        image: res.image,
      };
    });
  }
}
