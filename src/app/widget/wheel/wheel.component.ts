import {Component, OnInit, HostListener, NgZone, Output, EventEmitter, Input} from '@angular/core';
import {WidgetConnectionService} from "../shared/widgetConection.service";
import {error} from "util";
import {isBrowser} from "angular2-universal";

declare var $:any;
declare var ConicGradient:any;

@Component({
    selector: 'app-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.css']
})

export class WheelComponent implements OnInit{
    hint:string="Loading...";
    isLoaded: boolean = false;
    slider;
    timeZoneOffset;
    message: string = 'Information about today';
    uvValue: string = 'Value';
    forecastArray = [];
    textColor: string;
    forecastDay: string='';
    place: string= 'Location';
    setWidth;
    @Input() apiData;


    constructor(private widgetService: WidgetConnectionService , private zone: NgZone){}

    @HostListener('window:resize', ['$event'])
    resized(event){
      if(isBrowser ) {
        let width = $(window).width();
        if(width != this.setWidth) {
          this.setWidth = width;
          this.isLoaded = false;
          var timeout;
          if (timeout) {
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            this.isLoaded = true;
            if (this.isLoaded) {
              this.drawWheel();
            }
          }, 2000);
        }
      }
    }

    ngOnInit() {
      if(isBrowser) {
        this.setWidth = $(window).width();
        this.isLoaded = false;
        this.place = this.widgetService.placeName;
        this.getInformation();
        this.zone.run(() => {
        });
      }
    }


    getInformation(){
      if(isBrowser) {
        this.timeZoneOffset = this.apiData.TimeZoneOffset;
        this.forecastArray = this.apiData.UVForecast;
        var nd = new Date(new Date().getTime() + this.timeZoneOffset);
        console.log(nd.getUTCHours());
        if (nd.getUTCHours() >= 18 && nd.getUTCHours() <= 23 || nd.getUTCHours() >= 0 && nd.getUTCHours() < 6) {
          this.forecastDay = "Tomorrow's";
          this.message = this.apiData.DailyMessageTomorrow;
          this.uvValue = this.apiData.DailyForecasts[1].MaxUVString;
        } else {
          this.forecastDay = "Today's";
          this.message = this.apiData.DailyMessage;
          this.uvValue = this.apiData.DailyForecasts[0].MaxUVString;
        }
        if (this.uvValue == 'Extreme') {
          this.textColor = '#8C375D';
        } else if (this.uvValue == 'None') {
          this.textColor = '#4BB8A3';
        } else if (this.uvValue == 'Low') {
          this.textColor = '#86B37C';
        } else if (this.uvValue == 'Moderate') {
          this.textColor = '#FDAA2D';
        } else if (this.uvValue == 'High') {
          this.textColor = '#FD7C34';
        } else if (this.uvValue == 'Very High') {
          this.textColor = '#DC5535';
        }
        this.drawWheel();
        this.zone.run(() => {
        });
        console.log(this.apiData);
      }
    }

    drawWheel(){
        var size =Math.min($('#god').height(), $('#god').width())/2/  1.25;
        if($('#god').width() < 768 && $('#god').width() > 470){
          size = $('#god').height()/2 /  1.25 / 1.25;
        }
        if($('#god').width() <= 470 && $('#god').height()< 600){
          size = 125;
        }

        if(size < 125){
            size = 125;
        }

        if(size > 200){
            size = 200;
        }

        if (size > 180 && $('#god').width() < 813 ){
          size = 150;
        }

        if(size < 150 && $(window).width() > 767 ){
          $('#slider').css({
            'margin-top':'25px'
          })
        }else{
          $('#slider').css({
            'margin-top':'0px'
          })
        }

        this.slider = $('#slider').CircularSlider({
            radius: size,
            innerCircleRatio: '0.6',
            handleDist: 80,
            min: 1,
            max: 72,
            clockwise: true,
            // labelSuffix: "<div id='labelSuffix'><img type='image/svg+xml' class='image-inside' id='extreme' src='assets/widget/widget-flames/extreme.svg'><img type='image/svg+xml' class='image-inside' id='none' src='assets/widget/widget-flames/none.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='low' src='assets/widget/widget-flames/low.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='moderate' src='assets/widget/widget-flames/moderate.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='high' src='assets/widget/widget-flames/high.svg' alt='loading'><img type='image/svg+xml' class='image-inside' id='veryhigh' src='assets/widget/widget-flames/veryhigh.svg' alt='loading'><br><small id='image-in-text' style=' text-align:center; color:white; font-size: 18px'>Oops :(</small></div>",
            labelSuffix: "<div id='labelSuffix'><img  class='image-inside' id='extreme' src='assets/widget/widget-flames/flames-extreme.png'><img class='image-inside' id='none' src='assets/widget/widget-flames/flames-none.png' alt='loading'><img  class='image-inside' id='low' src='assets/widget/widget-flames/flames-low.png' alt='loading'><img class='image-inside' id='moderate' src='assets/widget/widget-flames/flames-moderate.png' alt='loading'><img class='image-inside' id='high' src='assets/widget/widget-flames/flames-high.png' alt='loading'><img class='image-inside' id='veryhigh' src='assets/widget/widget-flames/flames-veryhigh.png' alt='loading'><br><small id='image-in-text' style=' text-align:center; color:white; font-size: 18px'>Oops :(</small></div>",
            labelPrefix: "<br>",
            shape: "Circle",
            touch: true,
            animate: true,
            animateDuration: 150,
            selectable: false,
            forecastArray: this.forecastArray,
            locationOffset: this.timeZoneOffset,
            formLabel: undefined,

        });
      this.isLoaded = true;
    }
}
