export default class Flight {
    id: number;
    departureCity: string;
    arrivalCity: string;

    constructor(id: number, departureCity: string, arrivalCity: string){
        this.id = id;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
    }
}