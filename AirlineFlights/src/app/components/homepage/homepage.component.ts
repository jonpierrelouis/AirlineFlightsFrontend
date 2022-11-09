import { Component, OnInit } from '@angular/core';
import { FindFlightService } from 'src/app/find-flight.service';
import City from 'src/app/models/City';
import Flight from 'src/app/models/Flight';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  obj: City = {"city_id":0,"name":"-"}

  departureCity: City = this.obj;
  arrivalCity: City = this.obj;

  testCities: string[] = ["Boston", "New York", "Miami", "Chicago", "Los Angeles", "Dallas"];
  cities: City[] = [];

  flights: Flight[] = [];

  dcity: string = "";
  acity: string[] = [];

  constructor(private fly: FindFlightService) { }

  ngOnInit(): void {
    this.fly.getCities().subscribe((cities) =>{
      // City c = new Ci
      cities.unshift(this.obj);
      this.cities = cities;

    })
  }

  findFlight(){
    console.log(this.departureCity, this.arrivalCity);

    if(this.arrivalCity.city_id == 0 ){
      this.fly.getFlightsWithOnlyDeparture(this.departureCity).subscribe((flights) => {
        console.log(flights);
        this.flights = flights;
      
      })
      
    }else{
      this.fly.getFlights(this.departureCity, this.arrivalCity).subscribe((flights) =>{
        console.log(flights);
        this.flights = flights;

      })

    }
    
  }
}
