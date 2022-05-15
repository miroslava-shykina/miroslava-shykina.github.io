import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/interfaces/blogs/blog.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public idEdit!: number;
  public textarea2!: string;
  public titleName2!: string;
  public postblog: IBlog[] = [];

  constructor(private postsServis: PostsService) {}

  ngOnInit(): void {
    this.getPost();
  }
  getPost(): void {
    this.postblog = this.postsServis.getPost();
  }

  postPublic(blog: IBlog): boolean {
    if (this.postsServis.userName === 'admin') {
      return true;
    } else {
      if (blog.postedBy === this.postsServis.userName) {
        return true;
      } else {
        return false;
      }
    }
  }

  savePost(): void {
    const newEditPost = {
      id: this.idEdit,
      topic: this.titleName2,
      postedBy: this.postsServis.userName,
      date: this.postsServis.date,
      message: this.textarea2,
    };
    this.postsServis.updatePost(newEditPost, this.postsServis.idEdit);
    this.titleName2 = '';
    this.textarea2 = '';
  }

  btnEdit(blog: IBlog): void {
    this.postsServis.idEdit = blog.id;
    this.textarea2 = blog.message;
    this.titleName2 = blog.topic;
  }

  btnDelete(blog: IBlog): void {
    if (confirm('Are you sure?')) {
      this.postsServis.deletePost(blog.id);
    }
  }
}
