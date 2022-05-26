import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import {
  IBlog,
  IBlogRequest,
  IBlogResponse,
} from 'src/app/interface/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public arrayBlogs: Array<IBlogResponse> = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getAll().subscribe((data: IBlogResponse[]) => {
      this.arrayBlogs = data;
    });
  }
}
