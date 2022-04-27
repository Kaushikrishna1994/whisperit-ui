import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { interval } from 'rxjs';
import { User } from 'firebase';

@Component({
  selector: 'hy-feed',
  templateUrl: './hy-feed.component.html',
  styleUrls: ['./hy-feed.component.scss'],
})
export class HyFeedComponent implements OnInit, OnDestroy {
  posts = [];
  postSub;
  openId;
  comment = '';
  userData: User;
  userInfoKey = 'userInfoKey';

  constructor(private postsService: PostsService) {
    this.userData = JSON.parse(localStorage.getItem(this.userInfoKey));
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postsService.getAllPosts(this.userData.uid).subscribe((res) => {
      this.posts = res.data;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {
    this.postSub = interval(500000).subscribe((val) => {
      this.getAllPosts();
    });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  commentClicked(event: any): any {
    this.openId = event ? event.id : undefined;
    this.comment = '';
  }

  commentType(event) {
    this.comment = event;
  }
}
