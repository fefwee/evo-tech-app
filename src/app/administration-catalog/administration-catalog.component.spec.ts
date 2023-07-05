import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationCatalogComponent } from './administration-catalog.component';

describe('AdministrationCatalogComponent', () => {
  let component: AdministrationCatalogComponent;
  let fixture: ComponentFixture<AdministrationCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationCatalogComponent]
    });
    fixture = TestBed.createComponent(AdministrationCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
