import {Component, HostListener} from '@angular/core';
import {isBrowser} from "angular2-universal";

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  headerScrolledStyled: boolean = false;
  isOpen:boolean = false;
  dropIsOpen: boolean = false;

  @HostListener('window:resize' , ['$event'])
  removeMenu(event){
    if(isBrowser) {
      if ($(window).width() > 815) {
        this.isOpen = false;
      }
    }
  }

  onOpenMenu(){
    this.dropIsOpen = false;
    this.isOpen = !this.isOpen
  }


}
