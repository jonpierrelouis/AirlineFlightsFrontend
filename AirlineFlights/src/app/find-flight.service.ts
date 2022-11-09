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

    return this.http.get<Flight[]>(`${this.baseUrl}/flights/${departureCity.city_id}/${arrivalCity.city_id}`);
  }

  getFlightsWithOnlyDeparture(departureCity: City): Observable<Flight[]>{

    console.log(departureCity.city_id);
    return this.http.get<Flight[]>(`${this.baseUrl}/flights/departing/${departureCity.city_id}`);

  }

  getCities(): Observable<City[]>{

    return this.http.get<City[]>(`${this.baseUrl}/cities`, {});
  }

}
