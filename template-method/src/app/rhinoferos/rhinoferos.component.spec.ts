import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhinoferosComponent } from './rhinoferos.component';

describe('RhinoferosComponent', () => {
  let component: RhinoferosComponent;
  let fixture: ComponentFixture<RhinoferosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhinoferosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhinoferosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
