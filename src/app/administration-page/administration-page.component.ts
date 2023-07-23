import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.css'],
})
export class AdministrationPageComponent implements OnInit {
  public title = 'Администрирование';

  constructor() {}

  ngOnInit(): void {}
}
