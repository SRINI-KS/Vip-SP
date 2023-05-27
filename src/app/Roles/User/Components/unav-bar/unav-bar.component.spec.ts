import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavBarComponent } from './unav-bar.component';

describe('UnavBarComponent', () => {
  let component: UnavBarComponent;
  let fixture: ComponentFixture<UnavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
