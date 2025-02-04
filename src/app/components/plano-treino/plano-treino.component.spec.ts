import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoTreinoComponent } from './plano-treino.component';

describe('PlanoTreinoComponent', () => {
  let component: PlanoTreinoComponent;
  let fixture: ComponentFixture<PlanoTreinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoTreinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
