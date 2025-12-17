import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPropertyPage } from './add-property.page';

describe('AddPropertyPage', () => {
  let component: AddPropertyPage;
  let fixture: ComponentFixture<AddPropertyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
