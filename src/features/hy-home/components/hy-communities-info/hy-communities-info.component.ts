import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-hy-communities-info',
  templateUrl: './hy-communities-info.component.html',
  styleUrls: ['./hy-communities-info.component.scss'],
})
export class HyCommunitiesInfoComponent implements OnInit {
  community: any;

  constructor(
    public dialogRef: MatDialogRef<HyCommunitiesInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.community = data;
    console.log(this.community);
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
