import { Component, Input, OnInit } from '@angular/core';
import { FollowFriendsService } from '../../services/follow-friends.service';

@Component({
  selector: 'app-hy-friend-follow-card',
  templateUrl: './hy-friend-follow-card.component.html',
  styleUrls: ['./hy-friend-follow-card.component.scss'],
})
export class HyFriendFollowCardComponent implements OnInit {
  @Input()
  friend;

  @Input()
  friendRequest = false;

  constructor(private followFriendsService: FollowFriendsService) {}

  ngOnInit(): void {}

  sendFriendRequest(): void {
    this.followFriendsService
      .sendFriendFollowRequest(this.friend.id)
      .subscribe((res) => {
        this.friend.friendsStatus = 'REQUEST_PENDING';
      });
  }

  acceptFriendRequest(): any {
    this.followFriendsService
      .acceptFollowRequest(this.friend.id)
      .subscribe((res) => {
        this.friend.friendsStatus = 'ACCEPTED';
      });
  }
}
