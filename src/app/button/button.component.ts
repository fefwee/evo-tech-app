import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  public loginUser: boolean = false;
  @Input() btnTitle!: string;
  @Input() btnClass!: string;
  @Input() isDisabled = false;
  @Output() btnClick = new EventEmitter();

  constructor(public service: AuthService) {}

  ngOnInit() {}
  public onClick() {
    this.btnClick.emit();
  }
  userLOgin() {
    this.loginUser = this.service.isAuthorizated();
  }
}
