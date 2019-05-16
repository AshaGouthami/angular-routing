import { Component } from '@angular/core';
import { AppServices } from '../services/app.service';

@Component({
  selector: 'comment-root',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  title = 'helloworld';
  public datalist:any=[];
  constructor(private appservice:AppServices){
    this.fetchdata()
  }
  fetchdata(){
    this.datalist=this.appservice.commentdata().subscribe(
      res=>{
        this.datalist=res;
      }
    );
  }
}