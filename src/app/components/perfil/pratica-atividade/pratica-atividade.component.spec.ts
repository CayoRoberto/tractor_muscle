import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticaAtividadeComponent } from './pratica-atividade.component';

describe('PraticaAtividadeComponent', () => {
  let component: PraticaAtividadeComponent;
  let fixture: ComponentFixture<PraticaAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraticaAtividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
