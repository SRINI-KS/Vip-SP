import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnavBarComponent } from './pnav-bar.component';

describe('PnavBarComponent', () => {
  let component: PnavBarComponent;
  let fixture: ComponentFixture<PnavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
