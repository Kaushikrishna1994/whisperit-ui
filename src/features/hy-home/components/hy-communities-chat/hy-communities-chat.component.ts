import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/features/hy-auth/services/auth.service';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-hy-communities-chat',
  templateUrl: './hy-communities-chat.component.html',
  styleUrls: ['./hy-communities-chat.component.scss'],
})
export class HyCommunitiesChatComponent implements OnInit {
  @Input()
  community;

  @Input()
  chats = [];

  message = '';
  currUserId;

  constructor(
    private communityService: CommunityService,
    private authService: AuthService
  ) {
    this.currUserId = this.authService.userData.uid;
  }

  ngOnInit(): void {}

  postChat(): void {
    this.communityService
      .addChatMessage(this.community.id, this.message)
      .subscribe((res) => {
        this.chats.push(res.data);
        this.message = '';
      });
  }
}
