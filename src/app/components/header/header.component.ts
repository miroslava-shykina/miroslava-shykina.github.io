import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public isFavorite=false;
  constructor() { }

  ngOnInit(): void {
  }

  removeClass():void{
    if(this.isFavorite == false){
      this.isFavorite=true;
    }else{this.isFavorite=false;
    }
  }

}
