import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesGraphComponent } from './statistiques-graph.component';

describe('StatistiquesGraphComponent', () => {
  let component: StatistiquesGraphComponent;
  let fixture: ComponentFixture<StatistiquesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatistiquesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
