import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-hy-communities-create',
  templateUrl: './hy-communities-create.component.html',
  styleUrls: ['./hy-communities-create.component.scss'],
})
export class HyCommunitiesCreateComponent implements OnInit {
  community = {
    title: '',
    description: '',
  };

  constructor(
    private communityService: CommunityService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  createCommunity(): void {
    this.communityService.createCommunity(this.community).subscribe((res) => {
      console.log(res);
      this.location.back();
    });
  }
}
