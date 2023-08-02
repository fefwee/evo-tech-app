import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.css'],
})
export class AdministrationPageComponent implements OnInit {
  public title = 'Администрирование';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
