import {Component, OnInit, HostListener} from "@angular/core";
import {isBrowser} from "angular2-universal";

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  isVideo:boolean = false;

  @HostListener('window:resize' , ['$event'])
  removeVideo(event){
    if(isBrowser) {
      if ($(window).width() <= 800) {
        this.isVideo = false;
      }else{
        this.isVideo = true;
      }
    }
  }

  ngOnInit(){
    if(isBrowser) {
      if ($(window).width() >= 800) {
        this.isVideo = true;
      }
    }
  }
}
