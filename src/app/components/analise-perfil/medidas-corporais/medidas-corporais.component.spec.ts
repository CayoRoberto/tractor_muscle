import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasCorporaisComponent } from './medidas-corporais.component';

describe('MedidasCorporaisComponent', () => {
  let component: MedidasCorporaisComponent;
  let fixture: ComponentFixture<MedidasCorporaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidasCorporaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidasCorporaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
