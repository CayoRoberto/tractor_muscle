import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoExercicioComponent } from './tempo-exercicio.component';

describe('TempoExercicioComponent', () => {
  let component: TempoExercicioComponent;
  let fixture: ComponentFixture<TempoExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempoExercicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempoExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
