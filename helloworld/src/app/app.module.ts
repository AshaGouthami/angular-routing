import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { AppServices } from './services/app.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CommentdatailsComponent } from './commentdatails/commentdatails.component';
import { PostdatailsComponent } from './postdatails/postdatails.component';

const Routes:any=[
  // { 
  //   path: '',  
  //  redirectTo: '/user',
  //  pathMatch: 'full' 
  // },
  {
  path:'user',
  component:UserComponent
  },
  {
    path:'user/:id',
    component:UserinfoComponent
    },
  {
  path:'comment/:id',
  component: CommentdatailsComponent
  },
  {
    path:'comment',
    component:CommentComponent
    },
  {
  path:'post',
  component:PostComponent
  },
  {
  path:'post/:id',
  component:PostdatailsComponent
  },
  {
  path:'about',
  component:AboutComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    CommentComponent,
    AboutComponent,
    PostComponent,
    UserinfoComponent,
    CommentdatailsComponent,
    PostdatailsComponent
  ],
  imports:[BrowserModule,
    ReactiveFormsModule,
    FormsModule ,
    HttpClientModule ,
    CommonModule,
    RouterModule,
    RouterModule.forRoot(Routes, {useHash:true})

  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule {

}
  