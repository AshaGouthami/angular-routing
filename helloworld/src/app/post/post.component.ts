import { Component } from '@angular/core';
import { AppServices } from '../services/app.service';

@Component({
  selector: 'post-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  title = 'helloworld';
 public datalist1:any=[];
 constructor(private appservice:AppServices){
   this.fetchdata1()
 }
 fetchdata1(){
   this.datalist1=this.appservice.postdata().subscribe(
     res=>{
       this.datalist1=res;
     }
   );

 }

}