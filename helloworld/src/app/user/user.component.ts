
import { Component } from '@angular/core';
import { AppServices } from '../services/app.service';

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  title = 'helloworld';


public users:any=[];
constructor(private appservice:AppServices){
  this.fetchuser()
}
fetchuser(){
 this.users= this.appservice.getusers().subscribe(
    res => {
    this.users = res;
  });
}
}
