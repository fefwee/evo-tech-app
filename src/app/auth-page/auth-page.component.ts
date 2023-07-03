import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css'],
})
export class AuthPageComponent implements OnInit {
  public form!: FormGroup;
  public title: string = 'Вход в личный кабинет';
  private formData:any;
  

  constructor(private store:Store,private authservice: AuthService){}
 

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('',
      [Validators.minLength(3),Validators.required]),
      password: new FormControl('',
      [Validators.required,Validators.minLength(5)]),}
    );
 

  }
  /*  getUser(){
     this.authservice.authUser(this.formData).subscribe((m)=>{
      console.log(m);
      
    })
  }  */

  submit(data:any) {
    console.log(data)
   /*  if(this.form.valid){
      console.log('form submited', this.form);
      this.formData = {...this.form.value}
      this.form.reset()
    }
 
  } */
  this.authservice.authUser(data).subscribe((m)=>{
    console.log(m);
    
  })

}}
