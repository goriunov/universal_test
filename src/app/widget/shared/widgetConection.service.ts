import {Injectable, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/Rx'

@Injectable()

export class WidgetConnectionService {
    constructor(private http: Http){};

    newPlace = new EventEmitter();
    placeName: string = 'Auckland';
    longitude = 174.7633315;
    latitude = -36.8484597;

    locationOnLoad(){
        this.http.get('http://freegeoip.net/json/')
            .map(location => location.json())
            .subscribe((location)=>{
                this.placeName = location.city + ', ' + location.country_name;
                this.longitude = location.longitude;
                this.latitude = location.latitude;
                this.newPlace.emit({lng:this.longitude  , lat:this.latitude  , placeName: this.placeName});
            });
    }

    setLocation(lat , lng , placeData){
        this.longitude = lng;
        this.latitude = lat;
        var setCity: boolean = false;
        var setAdminState:boolean = false;
        var subLoc: boolean = false;

        console.log(placeData);

        if(placeData.length > 0) {
          for (var i = 0; i < placeData.length; i++) {
            for (var j = 0; j < placeData[i].types.length; j ++) {
              if (placeData[i].types[j] == 'sublocality') {
                this.placeName = placeData[i].long_name;
                subLoc = true;
              }
            }
            if(!subLoc) {
              if (placeData[i].types[0] == 'locality' ) {
                this.placeName = placeData[i].long_name;
                setCity = true;
              }
            }else{
              if (placeData[i].types[0] == 'locality' && this.placeName != placeData[i].long_name) {
                this.placeName += ", " + placeData[i].long_name;
                setCity = true;
              }
            }
          }

          if(!setCity && !subLoc){
            for (var i = 0; i < placeData.length; i++) {
              if (placeData[i].types[0] == 'administrative_area_level_1') {
                this.placeName = placeData[i].long_name;
                setAdminState = true;
              }
            }
          }

          for (var i = 0; i < placeData.length; i++) {
            if (placeData[i].types[0] == 'country') {
              this.placeName +=', ' + placeData[i].long_name
            }
          }

          if(!setCity && !setAdminState && !subLoc){
            for (var i = 0; i < placeData.length; i++) {
              if (placeData[i].types[0] == 'country') {
                this.placeName = placeData[i].long_name
              }
            }
          }
        }

      this.newPlace.emit({lng:this.longitude  , lat:this.latitude  , placeName: this.placeName});
    }

    getForecastData(){
      console.log('http://api.uvlens.com/api/Combined?longitude='+this.longitude+'&latitude='+this.latitude+'&skinType=0&key=spark64');
      return this.http.get('http://api.uvlens.com/api/Combined?longitude='+this.longitude+'&latitude='+this.latitude+'&skinType=0&key=spark64')
          .map(response => response.json());
    }
}
