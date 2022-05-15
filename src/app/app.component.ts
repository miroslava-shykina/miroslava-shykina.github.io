import { Component } from '@angular/core';
import { IBlog } from './interfaces/blogs/blog.interface';
import { IUser } from './interfaces/users/user.interface';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public userName!: string;
  public userName2!: string;
  public footerUser = false;
  public footerFirst = true;
  public appBlog!: IBlog[];
  public appUser!: IUser[];
  public textarea!: string;
  public titleName!: string;
  public email1!: string;
  public password1!: string;
  public email2!: string;
  public password2!: string;

  constructor(private appServis: PostsService) {}

  ngOnInit(): void {
    this.getPost();
    this.getUser();
  }

  getPost(): void {
    this.appBlog = this.appServis.getPost();
  }

  getUser(): void {
    this.appUser = this.appServis.getUser();
  }

  addPost(): void {
    const newBlog = {
      id: 1,
      topic: this.titleName,
      postedBy: this.userName,
      date: this.appServis.date,
      message: this.textarea,
    };
    if (this.appBlog.length > 0) {
      const id = this.appBlog.slice(-1)[0].id;
      newBlog.id = id + 1;
    }
    this.appServis.addPost(newBlog);
    this.titleName = '';
    this.textarea = '';
  }

  submitSingIn(): void {
    if (
      this.email1 === this.appServis.users[0].email &&
      this.password1 === this.appServis.users[0].password
    ) {
      this.appServis.userName = 'admin';
      this.userName = 'admin';
      this.footerFirst = false;
      this.footerUser = true;
      return;
    } else {
      for (let i = 0; i < this.appServis.users.length; i++) {
        if (
          this.email1 === this.appServis.users[i].email &&
          this.password1 === this.appServis.users[i].password
        ) {
          this.appServis.userName = this.appServis.users[i].username;
          this.footerFirst = false;
          this.footerUser = true;
          return;
        }
      }
      alert('You are not registered yet');
      this.footerFirst = true;
      this.footerUser = false;
      this.email1 = '';
      this.password1 = '';
      return;
    }
  }

  submitSingUp(): void {
    this.footerFirst = false;
    this.footerUser = true;
    let newUser = {
      id: 1,
      username: this.userName2,
      email: this.email2,
      password: this.password2,
    };
    this.appServis.userName = this.userName2;
    this.userName = this.appServis.userName;
    if (this.appUser.length > 0) {
      const id = this.appUser.slice(-1)[0].id;
      newUser.id = id + 1;
    }
    this.appServis.addUser(newUser);
    this.email1 = '';
    this.password1 = '';
    this.userName2 = '';
    this.password2 = '';
    this.email2 = '';
  }

  singOut(): void {
    this.footerUser = false;
    this.footerFirst = true;
    this.userName = '';
  }

  editPost(blog: IBlog): void {
    this.textarea = blog.message;
    this.titleName = blog.postedBy;
  }
}
