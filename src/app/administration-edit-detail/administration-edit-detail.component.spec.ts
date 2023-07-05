import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEditDetailComponent } from './administration-edit-detail.component';

describe('AdministrationEditDetailComponent', () => {
  let component: AdministrationEditDetailComponent;
  let fixture: ComponentFixture<AdministrationEditDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationEditDetailComponent]
    });
    fixture = TestBed.createComponent(AdministrationEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
