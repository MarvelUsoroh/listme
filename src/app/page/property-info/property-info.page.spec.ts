import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyInfoPage } from './property-info.page';

describe('PropertyInfoPage', () => {
  let component: PropertyInfoPage;
  let fixture: ComponentFixture<PropertyInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
