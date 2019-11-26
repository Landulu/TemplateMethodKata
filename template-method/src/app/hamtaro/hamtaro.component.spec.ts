import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamtaroComponent } from './hamtaro.component';

describe('HamtaroComponent', () => {
  let component: HamtaroComponent;
  let fixture: ComponentFixture<HamtaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamtaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamtaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
