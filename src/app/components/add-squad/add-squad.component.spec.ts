import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSquadComponent } from './add-squad.component';

describe('AddSquadComponent', () => {
  let component: AddSquadComponent;
  let fixture: ComponentFixture<AddSquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
