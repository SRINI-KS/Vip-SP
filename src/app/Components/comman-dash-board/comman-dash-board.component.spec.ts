import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanDashBoardComponent } from './comman-dash-board.component';

describe('CommanDashBoardComponent', () => {
  let component: CommanDashBoardComponent;
  let fixture: ComponentFixture<CommanDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommanDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommanDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
