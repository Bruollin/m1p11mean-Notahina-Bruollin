import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEmployeeComponent } from './accueil-employee.component';

describe('AccueilEmployeeComponent', () => {
  let component: AccueilEmployeeComponent;
  let fixture: ComponentFixture<AccueilEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
