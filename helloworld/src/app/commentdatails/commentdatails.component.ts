import { Component, OnInit } from '@angular/core';
import { AppServices } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commentdatails',
  templateUrl: './commentdatails.component.html',
  styleUrls: ['./commentdatails.component.scss']
})
export class CommentdatailsComponent{
    public Data:any=[];
  constructor(private h:AppServices,private route:ActivatedRoute ) {
    this.route.params.subscribe(
      data=>{
        const i=data.id;
        this.commentdata(i)
      }
    );
   }
   commentdata(id){
    this.Data=this.h.commentdetails(id).subscribe(
      res=>{
        this.Data=res;
      }
    );
   }


}
