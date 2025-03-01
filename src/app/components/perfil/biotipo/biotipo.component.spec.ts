import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotipoComponent } from './biotipo.component';

describe('BiotipoComponent', () => {
  let component: BiotipoComponent;
  let fixture: ComponentFixture<BiotipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiotipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiotipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
