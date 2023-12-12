import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTenentComponent } from './view-tenent.component';

describe('ViewTenentComponent', () => {
  let component: ViewTenentComponent;
  let fixture: ComponentFixture<ViewTenentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTenentComponent]
    });
    fixture = TestBed.createComponent(ViewTenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
