import { Injectable } from '@angular/core';
import { IBlog } from '../interfaces/blogs/blog.interface';
import { IUser } from '../interfaces/users/user.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public idEdit!: number;
  public date = new Date();
  public userName!: string;

  public users: Array<IUser> = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@gmail.com',
      password: '1111',
    },
  ];

  public blogs: Array<IBlog> = [
    {
      id: 1,
      topic: 'First post',
      postedBy: 'admin',
      date: this.date,
      message: 'Sing up to create your account and start to us Angular Blog',
    },
    {
      id: 2,
      topic: 'First post',
      postedBy: 'roma',
      date: this.date,
      message: 'Sing up to create your account and start to us Angular Blog',
    },
  ];

  constructor() {}
  getPost(): Array<IBlog> {
    return this.blogs;
  }

  addPost(blog: IBlog): void {
    this.blogs.push(blog);
  }

  getUser(): Array<IUser> {
    return this.users;
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }

  updatePost(blog: IBlog, id: number): void {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    this.blogs.splice(index, 1, blog);
  }

  deletePost(id: number): void {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    this.blogs.splice(index, 1);
  }
}
