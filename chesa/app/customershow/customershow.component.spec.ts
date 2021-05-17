import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomershowComponent } from './customershow.component';

describe('CustomershowComponent', () => {
  let component: CustomershowComponent;
  let fixture: ComponentFixture<CustomershowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomershowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
