import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTicket2Component } from './assigned-ticket2.component';

describe('AssignedTicket2Component', () => {
  let component: AssignedTicket2Component;
  let fixture: ComponentFixture<AssignedTicket2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTicket2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedTicket2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
