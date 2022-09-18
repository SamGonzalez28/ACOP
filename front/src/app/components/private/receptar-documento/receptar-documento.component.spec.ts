import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptarDocumentoComponent } from './receptar-documento.component';

describe('ReceptarDocumentoComponent', () => {
  let component: ReceptarDocumentoComponent;
  let fixture: ComponentFixture<ReceptarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptarDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
