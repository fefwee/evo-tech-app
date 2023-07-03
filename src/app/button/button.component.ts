import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input() btnTitle!: string;
  @Input() btnClass!: string;

  constructor() {}

  ngOnInit(): void {}
}
