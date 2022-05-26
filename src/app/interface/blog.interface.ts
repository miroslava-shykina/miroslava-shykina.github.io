export interface IBlog {
  id: number;
  title: string;
  text: string;
  author: string;
  image: string;
}

export interface IBlogRequest {
  id: number;
  title: string;
  text: string;
  author: string;
  image: string;
}

export interface IBlogResponse extends IBlogRequest {
  id: number;
}
