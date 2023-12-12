import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTenentComponent } from './manage-tenent.component';

describe('ManageTenentComponent', () => {
  let component: ManageTenentComponent;
  let fixture: ComponentFixture<ManageTenentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTenentComponent]
    });
    fixture = TestBed.createComponent(ManageTenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
