import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  constructor(private http: HttpClient) {}

  createCommunity(community): any {
    const url = `/api/communities`;
    console.log(community);
    return this.http.post(url, community);
  }

  getCommunities(): any {
    const url = `/api/communities`;
    return this.http.get(url);
  }

  getCommunitiesConnections(): any {
    const url = `/api/communities/connections`;
    return this.http.get(url);
  }

  getCommunityChat(communityId): any {
    const url = `/api/communities/${communityId}/chats`;
    return this.http.get(url);
  }

  addChatMessage(communityId, message): any {
    const url = `/api/communities/${communityId}/chats`;
    return this.http.post(url, message);
  }

  addChatMembers(communityId, userIds): any {
    const url = `/api/communities/${communityId}/members`;
    return this.http.post(url, userIds);
  }
}
