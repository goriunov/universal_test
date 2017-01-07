import {Component, OnInit} from "@angular/core";
import {isBrowser} from "angular2-universal";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls:["./about.component.css"]
})
export class AboutComponent implements OnInit{
 ngOnInit(){
   if(isBrowser){
     window.scrollTo(0, 0);
     console.log('Done');
   }
 }

}
