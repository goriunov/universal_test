import {Component, OnInit, ElementRef, ViewChild, Renderer, NgZone, EventEmitter, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MapsAPILoader} from "angular2-google-maps/core";
import {WidgetConnectionService} from "../shared/widgetConection.service";
import {isBrowser} from "angular2-universal";

declare var google : any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{

  isLoaded: boolean = false;
  latitude: number;
  longitude: number;
  searchControl: FormControl;
  zoom: number;
  marker: any;
  geocoder: any;
  display: boolean = true;
  info_big: boolean;
  flamesLoading: boolean =false;
  name: any;
  apiData: any;
  uvLevel: string = '';
  @Output() openComponent = new EventEmitter();

  @ViewChild("search")
  public searchElementRef: ElementRef;
  @ViewChild("map")
  public mapElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private widgetService:WidgetConnectionService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.searchControl = new FormControl();
    if(isBrowser) {
      this.widgetService.newPlace.subscribe(
        (data) => {
          this.name = data.placeName;
          this.zone.run(() => {
          });
        }
      );
      //set google maps defaults
      this.zoom = 17;
      this.latitude = this.widgetService.latitude;
      this.longitude = this.widgetService.longitude;

      //create search FormControl


      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let map = new google.maps.Map(this.mapElementRef.nativeElement, {
          center: {lat: this.latitude, lng: this.longitude},
          zoom: 13,
          zoomControl: true,
          gestureHandling: 'cooperative',
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
          },
          mapTypeControlOptions: {
            mapTypeIds: []
          },
          draggable: true,
          scrollwheel: false
        });
        let searchBox = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.searchElementRef.nativeElement);

        map.addListener('click', (e) => {
          this.placeMarker({lat: e.latLng.lat(), lng: e.latLng.lng()});
        });

        map.addListener('bounds_changed', () => {
          searchBox.setBounds(map.getBounds());
        });

        this.marker = new google.maps.Marker({
          map: map,
        });
        searchBox.addListener("place_changed", () => {
          //get the place result
          var place = searchBox.getPlace();

          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);// Why 17? Because it looks good.
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          this.placeMarker({lat: this.latitude, lng: this.longitude});
        });
        setTimeout(() => {
          this.isLoaded = true;
          this.zone.run(() => {
          });
        }, 500);

        this.geocoder = new google.maps.Geocoder;
        this.placeMarker({lat: this.latitude, lng: this.longitude});
        this.marker.addListener('click', () => {
          this.showInfo();
          this.zone.run(() => {
          });
        });

      });
    }

  }

  placeMarker(latLng){
    this.showInfo();
    this.geocodeThis({lat:latLng.lat, lng:latLng.lng});
  }

  geocodeThis(latLng){
    this.flamesLoading = false;
    this.info_big = false;
    this.geocoder.geocode({'location': latLng}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          this.marker.setPosition(latLng);
          this.widgetService.setLocation(latLng.lat, latLng.lng, results[1].address_components);
          this.widgetService.getForecastData().subscribe(
            (data)=> {
              this.apiData = data;
              var currentUv = this.apiData.CurrentUV;
              if (currentUv >= 0.0 && currentUv < 0.5) {
                this.uvLevel = 'None';
              }
              if (currentUv >= 0.5 && currentUv < 3.0) {
                this.uvLevel  = 'Low';
              }
              if (currentUv >= 3.0 && currentUv < 6.0) {
                this.uvLevel  = 'Moderate';
              }
              if (currentUv >=  6.0  && currentUv < 8.0) {
                this.uvLevel  = 'High';
              }
              if (currentUv >=  8.0  && currentUv < 11.0) {
                this.uvLevel  = 'Very high';
              }
              if (currentUv >=  11.0) {
                this.uvLevel  = 'Extreme';
              }
              this.flamesLoading = true;
              this.zone.run(()=>{});
              console.log(data);

            },
            (error)=>{
              this.apiData = {
                "StartTime": "2017-01-02T06:00:00",
                "UVForecast": [
                  0.288085938,
                  0.8691406,
                  2.23144531,
                  4.223633,
                  2.28027344,
                  2.944336,
                  3.29589844,
                  4.35546875,
                  3.72070313,
                  2.72949219,
                  2.241211,
                  1.07910156,
                  0.37109375,
                  0.09277344,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0.297851563,
                  0.795898438,
                  2.05078125,
                  3.89648438,
                  8.530273,
                  11.0205078,
                  12.3291016,
                  12.4365234,
                  10.625,
                  7.79296875,
                  4.375,
                  2.10449219,
                  0.72265625,
                  0.01953125,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "ForecastLocation": {
                  "type": "Point",
                  "coordinates": [
                    175,
                    -37
                  ]
                },
                "BurntimeForecast": [],
                "DailyMessage": "The UV today is forecasted to be Moderate. Be careful between 8:00 AM and 3:00 PM and remember to cover up during these times.",
                "DailyMessageTomorrow": "The UV tomorrow is forecasted to be Extreme. Be careful between 8:00 AM and 5:00 PM and remember to cover up during these times.",
                "DailyForecasts": [
                  {
                    "SafeBefore": "2017-01-02T08:00:00",
                    "SafeAfter": "2017-01-02T15:00:00",
                    "MaxUVString": "Moderate",
                    "MaxUVI": 4.35546875
                  },
                  {
                    "SafeBefore": "2017-01-03T08:00:00",
                    "SafeAfter": "2017-01-03T17:00:00",
                    "MaxUVString": "Extreme",
                    "MaxUVI": 12.4365234
                  }
                ],
                "CurrentUV": 1,
                "SensorLocation": {
                  "type": "Point",
                  "coordinates": [
                    174.76664733886719,
                    -36.856155395507813
                  ]
                },
                "MeasurementTime": "2017-01-02T04:18:30+00:00",
                "LiveData": true,
                "CurrentWeather": "Mostly Cloudy",
                "CurrentTemperature": 21.1,
                "LocationString": null,
                "TimeZoneOffset": 46800000
              };
              var currentUv = this.apiData.CurrentUV;
              if (currentUv >= 0.0 && currentUv < 0.5) {
                this.uvLevel = 'None';
              }
              if (currentUv >= 0.5 && currentUv < 3.0) {
                this.uvLevel  = 'Low';
              }
              if (currentUv >= 3.0 && currentUv < 6.0) {
                this.uvLevel  = 'Moderate';
              }
              if (currentUv >=  6.0  && currentUv < 8.0) {
                this.uvLevel  = 'High';
              }
              if (currentUv >=  8.0  && currentUv < 11.0) {
                this.uvLevel  = 'Very high';
              }
              if (currentUv >=  11.0) {
                this.uvLevel  = 'Extreme';
              }
              this.flamesLoading = true;
              this.zone.run(()=>{});
            }
          );

          this.zone.run(()=>{});
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

  hideInfo(){
    this.display = false;
  }
  minimizeInfo(){
    this.info_big = false;
  }
  showInfo(){
    this.display = true;
  }
  openWheelComponent(){
    this.info_big = true;
  }
}
