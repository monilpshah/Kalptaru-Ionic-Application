import { Component, OnInit, ViewChild } from '@angular/core';

declare var google;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor() { }

  map:any;
  @ViewChild("map") mapElement;
  ngOnInit() {
    // this.initMap();
  }
  // ionViewDidLoad(){
    
  // }
  // initMap(){
  //   let coords = new google.maps.LatLng(45,100);
  //   let mapOptions : google.maps.MapOptions = {
  //     center : coords,
  //     zoom:14,
  //     mapTypeId : google.maps.MapTypeId.ROADMAP
  //   }
  //   this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
  // }

}
