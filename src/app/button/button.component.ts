import { Component, Input, Output, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  public loginUser:boolean = false;
  @Input() btnTitle!: string;
  @Input() btnClass!: string;
  

  constructor(public service:AuthService) {}

  ngOnInit() {
    
  }
  userLOgin(){
    this.loginUser = this.service.isAuthorizated()
  }
}
