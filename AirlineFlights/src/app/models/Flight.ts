export default class Flight {
    id: number;
    departureCity: string;
    arrivalCity: string;
    airline: string;
    cost: number;

    constructor(id: number, departureCity: string, arrivalCity: string, airline: string, cost: number){
        this.id = id;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.airline = airline;
        this.cost = cost;
    }
}