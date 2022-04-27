import { Component, OnInit } from '@angular/core';
import { FollowFriendsService } from '../../services/follow-friends.service';

@Component({
  selector: 'app-hy-friends-follow',
  templateUrl: './hy-friends-follow.component.html',
  styleUrls: ['./hy-friends-follow.component.scss'],
})
export class HyFriendsFollowComponent implements OnInit {
  friends = [];
  key = '';
  hideSearch = true;
  friendRequest = false;

  constructor(private followFriendsService: FollowFriendsService) {
    this.getFriends();
  }

  ngOnInit(): void {}

  toggleSearch(): void {
    this.hideSearch = !this.hideSearch;
    this.friends = [];
  }

  reset(hide = true): void {
    this.friendRequest = false;
    this.hideSearch = hide;
    this.friends = [];
    this.key = '';
  }

  getFriends(): void {
    this.reset();
    this.followFriendsService.getFriendsFollows().subscribe((res) => {
      this.friends = res.data;
      console.log(this.friends);
    });
  }

  updateKey(event): void {
    this.key = event.value;
  }

  getAllFriends(): void {
    this.friends = [];
    this.followFriendsService.searchUsers(this.key).subscribe((res) => {
      this.friends = res.data;
      console.log(this.friends);
    });
  }

  getAllFriendRequests(): void {
    this.reset();
    this.friendRequest = true;
    this.followFriendsService.getFriendFollowRequests().subscribe((res) => {
      this.friends = res.data;
      console.log(this.friends);
    });
  }
}
