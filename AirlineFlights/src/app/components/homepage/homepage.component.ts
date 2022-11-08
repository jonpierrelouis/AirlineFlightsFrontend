import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  departureCity: string = "";
  arrivalCity: string = "";

  testCities: string[] = ["Boston", "New York", "Miami", "Chicago", "Los Angeles", "Dallas"];

  constructor() { }

  ngOnInit(): void {
  }

  findFlight(){
    console.log(this.departureCity, this.arrivalCity);
  }
}
