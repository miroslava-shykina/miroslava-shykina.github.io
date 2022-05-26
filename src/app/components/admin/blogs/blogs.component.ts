import { Component, OnInit } from '@angular/core';
import {
  IBlog,
  IBlogRequest,
  IBlogResponse,
} from 'src/app/interface/blog.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  public arrayBlogs!: IBlog[];
  public editStatus!: boolean;
  public title!: string;
  public text!: string;
  public author!: string;
  public image =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkeVTdJMuLppICCFFrRWarZhepewwiW84DQ&usqp=CAU';
  public editID!: number;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getAll().subscribe((data: IBlogResponse[]) => {
      this.arrayBlogs = data;
    });
  }

  addPost(): void {
    if (this.title && this.text && this.author) {
      const newPost = {
        id: 1,
        title: this.title,
        text: this.text,
        author: this.author,
        image: this.image,
      };
      
      this.postsService.create(newPost).subscribe((data) => {
        this.getPosts();
      });
      this.resetForm();
    }
  }

  editPost(blog: IBlog): void {
    this.title = blog.title;
    this.text = blog.text;
    this.author = blog.author;
    this.image = blog.image;
    this.editStatus = true;
    this.editID = blog.id;
  }

  deletePost(discount: IBlog): void {
    if (confirm('Are you sure?')) {
      this.postsService.delete(discount.id).subscribe(() => {
        this.getPosts();
      });
    }
  }

  saveEditPost(): void {
    const updatePost = {
      id: this.editID,
      title: this.title,
      text: this.text,
      author: this.author,
      image: this.image,
    };
    this.postsService.update(updatePost, this.editID).subscribe((data) => {
      this.getPosts();
      this.resetForm();
    });
    this.editStatus = false;
  }

  private resetForm(): void {
    this.title = '';
    this.text = '';
    this.author = '';
  }
}
