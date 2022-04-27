import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyFriendFollowCardComponent } from './hy-friend-follow-card.component';

describe('HyFriendFollowCardComponent', () => {
  let component: HyFriendFollowCardComponent;
  let fixture: ComponentFixture<HyFriendFollowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyFriendFollowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFriendFollowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
