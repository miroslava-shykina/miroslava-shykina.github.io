import { DatePipe } from "@angular/common";

export interface IBlog {
    id: number, 
    postedBy: string, 
    topic: string, 
    date: Date,
    message: string
}