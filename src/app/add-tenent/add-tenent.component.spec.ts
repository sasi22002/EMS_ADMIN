import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenentComponent } from './add-tenent.component';

describe('AddTenentComponent', () => {
  let component: AddTenentComponent;
  let fixture: ComponentFixture<AddTenentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTenentComponent]
    });
    fixture = TestBed.createComponent(AddTenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
