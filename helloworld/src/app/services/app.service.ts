import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
}
)
export class AppServices {
    constructor(private http:HttpClient) {
    }
    getusers(){
        return this.http.get("http://jsonplaceholder.typicode.com/users")
    } 
    commentdata(){
        return this.http.get("http://jsonplaceholder.typicode.com/comments")
    }
    postdata(){
        return this.http.get("http://jsonplaceholder.typicode.com/posts")
    }
    userdetails(id){
        return this.http.get("http://jsonplaceholder.typicode.com/users/"+id)
    }
    commentdetails(id){
        return this.http.get("http://jsonplaceholder.typicode.com/comments/"+id)
    }
    postdetails(id){
        return this.http.get("http://jsonplaceholder.typicode.com/posts/"+id)
    }
    }

