import { Component, OnInit } from '@angular/core';
import { Comments } from './../../../core/models/comments';
import { CommentServiceService } from './../../../core/services/comment-service.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comments[] = [];
  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];
  constructor(
    private commentServiceService: CommentServiceService
  ) { }

  ngOnInit() {
    this.fetchComments();
  }

  fetchComments() {
    this.commentServiceService.getcomments()
      .subscribe(res => {
        this.comments = res;
      });
  }

}
