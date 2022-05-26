import { Injectable } from '@angular/core';
import {
  IBlogRequest,
  IBlogResponse,
} from '../interface/blog.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = environment.BACKEND_URL;
  private api = { blogs: `${this.url}/blogs` };

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBlogResponse[]> {
    return this.http.get<IBlogResponse[]>(this.api.blogs);
  }

  getOne(id: number): Observable<IBlogResponse> {
    return this.http.get<IBlogResponse>(`${this.api.blogs}/${id}`);
  }

  create(discount: IBlogRequest): Observable<IBlogResponse> {
    return this.http.post<IBlogResponse>(this.api.blogs, discount);
  }

  update(discount: IBlogRequest, id: number): Observable<IBlogResponse> {
    return this.http.patch<IBlogResponse>(`${this.api.blogs}/${id}`, discount);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.blogs}/${id}`);
  }
}
