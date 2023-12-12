import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTenantPropertyComponent } from './map-tenant-property.component';

describe('MapTenantPropertyComponent', () => {
  let component: MapTenantPropertyComponent;
  let fixture: ComponentFixture<MapTenantPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapTenantPropertyComponent]
    });
    fixture = TestBed.createComponent(MapTenantPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
