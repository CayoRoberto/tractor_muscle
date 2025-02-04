import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoObjetivoComponent } from './plano-objetivo.component';

describe('PlanoObjetivoComponent', () => {
  let component: PlanoObjetivoComponent;
  let fixture: ComponentFixture<PlanoObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoObjetivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
