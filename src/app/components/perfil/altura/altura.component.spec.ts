import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlturaComponent } from './altura.component';

describe('AlturaComponent', () => {
  let component: AlturaComponent;
  let fixture: ComponentFixture<AlturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
