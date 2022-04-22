import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/Post';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-viewallposts',
  templateUrl: './viewallposts.component.html',
  styleUrls: ['./viewallposts.component.css']
})

export class ViewallpostsComponent implements OnInit{
  @Input() 
  postViewing : Array<Post>=[];
  constructor(private postService : PostService) { }
  

  ngOnInit(): void {

        this.postService.getAllPosts().subscribe(responseBody=>{
          
          this.postViewing = responseBody;   
          this.postViewing.sort((a,b) => b.id - a.id)
        });
 
  }
}


