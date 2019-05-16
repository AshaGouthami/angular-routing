import { Component } from '@angular/core';
import { AppServices } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdatails',
  templateUrl: './postdatails.component.html',
  styleUrls: ['./postdatails.component.styl']
})
export class PostdatailsComponent{
  u:any=[];
  constructor(private h:AppServices,private route:ActivatedRoute ) {
    this.route.params.subscribe(
      data=>{
      const i=data.id;
      this.postdata(i);
      }
    );
   }
   postdata(id){
      this.h.postdetails(id).subscribe(
        res=>{
          this.u=res;
        }
      );
   }

}
