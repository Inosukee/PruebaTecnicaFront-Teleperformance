import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './components/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CommentsModule { }
