import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommunityService } from '../../services/community.service';
import { HyCommunitiesInfoComponent } from '../hy-communities-info/hy-communities-info.component';
import { HySelectFriendsComponent } from '../hy-select-friends/hy-select-friends.component';

@Component({
  selector: 'app-hy-communities-list',
  templateUrl: './hy-communities-list.component.html',
  styleUrls: ['./hy-communities-list.component.scss'],
})
export class HyCommunitiesListComponent implements OnInit {
  @Output()
  selectCommunity = new EventEmitter<any>();

  communities = [];
  currCommunity;

  constructor(
    private communityService: CommunityService,
    public dialog: MatDialog
  ) {
    this.getCommunities();
  }

  ngOnInit(): void {}

  communityInfo(group: any): void {
    const dialogRef = this.dialog.open(HyCommunitiesInfoComponent, {
      width: '450px',
      data: group,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log();
      }
    });
  }

  inviteFriends(group: any): void {
    const dialogRef = this.dialog.open(HySelectFriendsComponent, {
      width: '450px',
      data: group,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.communityService
          .addChatMembers(
            group.id,
            result.map((r) => r.id)
          )
          .subscribe((res) => {
            console.log(res);
          });
      }
    });
  }

  getCommunities(): void {
    this.communityService.getCommunities().subscribe((res) => {
      this.communities = res.data;
      if (!this.currCommunity) {
        this.currCommunity = this.communities[0];
        this.selectCommunity.emit(this.communities[0]);
      }
      console.log(res);
    });
  }

  communitySelected(value: any): any {
    this.getCommunities();
    this.currCommunity = value;
    this.selectCommunity.emit(value);
  }
}
