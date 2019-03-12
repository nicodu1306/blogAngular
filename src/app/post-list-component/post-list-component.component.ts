import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postcontent: string;
  @Input() postloveIts: number;
  @Input() created_at: Date;


  constructor() { }

  ngOnInit() {
  }
  loveit() {
    this.postloveIts++;
  }
  dontloveit() {
    this.postloveIts--;
  }

  statuslovecolor() {
    if (this.postloveIts > 0) {
      return 'green';
    }
    if (this.postloveIts === 0) {
      return 'black';
    } else {
      return 'red';
    }
  }
  statuslove() {
    if (this.postloveIts > 0) {
      return true;
    }
    if (this.postloveIts < 0) {
      return false;
    } else {
      return null;
    }
  }

}
