import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../models/comments';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getcomments() {
    return this.httpClient.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
}
