export default class Flight {
    flight_id: number;
    departure_city: string;
    arrival_city: string;
    airline: string;
    cost: number;

    constructor(flight_id: number, departure_city: string, arrival_city: string, airline: string, cost: number){
        this.flight_id = flight_id;
        this.departure_city = departure_city;
        this.arrival_city= arrival_city;
        this.airline = airline;
        this.cost = cost;
    }
}