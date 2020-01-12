import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroscopeComponent } from './microscope.component';

describe('MicroscopeComponent', () => {
  let component: MicroscopeComponent;
  let fixture: ComponentFixture<MicroscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
