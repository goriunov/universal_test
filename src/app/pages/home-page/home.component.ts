import {Component, OnInit, HostListener} from "@angular/core";
import {isBrowser} from "angular2-universal";

declare var $:any;
declare var System:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  isVideo:boolean = false;
  isMobile: boolean = false;

  @HostListener('window:resize' , ['$event'])
  removeVideo(event){
    if(isBrowser) {
      if ($(window).width() <= 800) {
        this.isVideo = false;
        this.isMobile = true;
      }else{
        this.isMobile = false;
        this.isVideo = true;
      }
    }
  }

  ngOnInit(){
    if(isBrowser){
      window.scrollTo(0, 0);
    }
    if(isBrowser) {
      if ($(window).width() >= 800) {
        this.isVideo = true;
      }else{
        this.isMobile = true;
      }
    }
  }
}
