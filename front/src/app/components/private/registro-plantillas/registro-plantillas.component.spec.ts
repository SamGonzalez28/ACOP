import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPlantillasComponent } from './registro-plantillas.component';

describe('RegistroPlantillasComponent', () => {
  let component: RegistroPlantillasComponent;
  let fixture: ComponentFixture<RegistroPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPlantillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
