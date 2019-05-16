import { Component } from '@angular/core';
import { AppServices } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.styl']
})
export class UserinfoComponent {
 newData:any=[];

  constructor(private h:AppServices,private route:ActivatedRoute) {
    this.route.params.subscribe(
      data=>{
        const i=data.id;
        this.userdetails(i);
      }
    )
  }

  userdetails(id){
    this.h.userdetails(id).subscribe(
      res=>{
        this.newData=res;
      }
    )
  }
}
