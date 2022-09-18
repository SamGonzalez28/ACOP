import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCodigoComponent } from './registro-codigo.component';

describe('RegistroCodigoComponent', () => {
  let component: RegistroCodigoComponent;
  let fixture: ComponentFixture<RegistroCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
