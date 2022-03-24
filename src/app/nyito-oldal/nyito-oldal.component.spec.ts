import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyitoOldalComponent } from './nyito-oldal.component';

describe('NyitoOldalComponent', () => {
  let component: NyitoOldalComponent;
  let fixture: ComponentFixture<NyitoOldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyitoOldalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyitoOldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
