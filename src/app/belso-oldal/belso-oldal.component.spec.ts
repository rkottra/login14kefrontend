import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelsoOldalComponent } from './belso-oldal.component';

describe('BelsoOldalComponent', () => {
  let component: BelsoOldalComponent;
  let fixture: ComponentFixture<BelsoOldalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelsoOldalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelsoOldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
