import { ICategoryResponse } from "../category/category.interface";

export interface IProductRequest{
category: ICategoryResponse;
name: string;
path: string;
ingredients: string;
weight: string;
price: number;
imgPath: string;
}

export interface IProductResponse extends IProductRequest{
    id: number;
}