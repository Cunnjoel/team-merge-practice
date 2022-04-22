import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-viewallposts',
  templateUrl: './viewallposts.component.html',
  styleUrls: ['./viewallposts.component.css']
})

export class ViewallpostsComponent implements OnInit {
  postViewing : Array<Post>=[];
  constructor(private postService : PostService) { }
  

  ngOnInit(): void {

        this.postService.getAllPosts().subscribe(responseBody=>{
          
          this.postViewing = responseBody;   
         
        });
 
  }
<<<<<<< HEAD
  viewAllPosts(){
      this.postService.getAllPosts().subscribe(responseBody=>{
        this.postViewing = responseBody
        console.log(this.postViewing)
       });
    }
=======


  // viewAllPosts(){
  //     this.postService.getAllPosts().subscribe(responseBody=>{
  //       this.postViewing = responseBody
  //      });
  //   }
>>>>>>> 94dd26afbbfd060cdb73476d15c64c99044c394d
}


