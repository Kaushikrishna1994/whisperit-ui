import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-hy-communities',
  templateUrl: './hy-communities.component.html',
  styleUrls: ['./hy-communities.component.scss'],
})
export class HyCommunitiesComponent implements OnInit {
  selectedCommunity;
  chats = [];
  chatSub;

  constructor(private communityService: CommunityService) {}

  ngOnInit(): void {
    this.chatSub = interval(5000).subscribe((val) => {
      this.getChats();
    });
  }

  getChats(): void {
    if (this.selectedCommunity) {
      this.communityService
        .getCommunityChat(this.selectedCommunity.id)
        .subscribe((res) => {
          this.chats = res.data;
        });
    }
  }

  communitySelectChange(event): void {
    this.selectedCommunity = event;
    this.getChats();
  }

  ngOnDestroy(): void {
    this.chatSub.unsubscribe();
  }
}
