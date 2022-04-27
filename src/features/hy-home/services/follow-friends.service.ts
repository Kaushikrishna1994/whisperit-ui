import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FollowFriendsService {
  constructor(private http: HttpClient) {}

  getFriendsFollows(): any {
    const url = `/api/friendsFollow`;
    return this.http.get(url);
  }

  searchUsers(search): any {
    const url = `/api/user/searchPeopleToFollow?key=${search}`;
    return this.http.get(url);
  }

  sendFriendFollowRequest(userId): any {
    const url = `/api/friendsFollow/sendFollow/${userId}`;
    return this.http.post(url, null);
  }

  getFriendFollowRequests(): any {
    const url = `/api/friendsFollow/followRequests`;
    return this.http.get(url);
  }

  acceptFollowRequest(userId): any {
    const url = `/api/friendsFollow/acceptFollow/${userId}`;
    return this.http.post(url, null);
  }

  rejectFollowRequest(userId): any {
    const url = `/api/friendsFollow/rejectFollow/${userId}`;
    return this.http.post(url, null);
  }
}
