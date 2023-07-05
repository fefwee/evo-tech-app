import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit{

  public title = 'Личный кабинет'

  public userInfo:any;

  constructor(public serviceGetFullUser:AuthService){}

  ngOnInit(): void {
    /* const id = localStorage.getItem('id')
    this.serviceGetFullUser.getFullUser(id).subscribe((res)=>{
      this.userInfo = res
    }) */
  }
}
