import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarservicesComponent } from './carservices.component';

describe('CarservicesComponent', () => {
  let component: CarservicesComponent;
  let fixture: ComponentFixture<CarservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
