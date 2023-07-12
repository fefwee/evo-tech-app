import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

interface IUser {
  age:number
  ip:string
  email:string
  firstName:string
  image:string
}
@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})



export class PersonalAreaComponent implements OnInit{


  public title = 'Личный кабинет'
  public isAdmin:boolean = false;
  
   public userInfo:IUser  = {
    age:0,
    ip:'',
    email:'',
    firstName:'',
    image:''
   }

  
  

  constructor( public serviceGetFullUser:AuthService){}

  ngOnInit(): void {
    const id = localStorage.getItem('id')
     
    this.serviceGetFullUser.getFullUser(id).subscribe((res)=>{
      
      this.userInfo = {
        age:res.age,
        ip:res.ip,
        email:res.email,
        firstName:res.firstName,
        image:res.image
      }
      
    }) 
     this.isAdmin = this.serviceGetFullUser.isAdmin()

  }


} 
