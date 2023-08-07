import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAcceptComponent } from './p-accept.component';

describe('PAcceptComponent', () => {
  let component: PAcceptComponent;
  let fixture: ComponentFixture<PAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
