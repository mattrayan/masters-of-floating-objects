import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfilesComponent } from './team-profiles.component';

describe('TeamProfilesComponent', () => {
  let component: TeamProfilesComponent;
  let fixture: ComponentFixture<TeamProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
