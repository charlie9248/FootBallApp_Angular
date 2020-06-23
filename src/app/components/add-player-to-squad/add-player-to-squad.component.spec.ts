import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerToSquadComponent } from './add-player-to-squad.component';

describe('AddPlayerToSquadComponent', () => {
  let component: AddPlayerToSquadComponent;
  let fixture: ComponentFixture<AddPlayerToSquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlayerToSquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerToSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
