import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyFriendsFollowComponent } from './hy-friends-follow.component';

describe('HyFriendsFollowComponent', () => {
  let component: HyFriendsFollowComponent;
  let fixture: ComponentFixture<HyFriendsFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyFriendsFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFriendsFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
