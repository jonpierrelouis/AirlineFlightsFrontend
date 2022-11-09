import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import City from './models/City';
import Flight from './models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FindFlightService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFlights(departureCity: City, arrivalCity: City): Observable<Flight[]>{

    let obj = {
      departureCity,
      arrivalCity
    }

    return this.http.post<Flight[]>(`${this.baseUrl}/flights`, JSON.stringify(obj));
  }

  getFlightsWithOnlyDeparture(departureCity: City): void{

    let obj = {
      departureCity
    }
    console.log(departureCity.city_id);
    this.http.post<Flight[]>(`${this.baseUrl}/flights/departing`,departureCity).subscribe((data) => console.log(data))

  }

  getCities(): Observable<City[]>{

    return this.http.get<City[]>(`${this.baseUrl}/cities`, {});
  }

}
