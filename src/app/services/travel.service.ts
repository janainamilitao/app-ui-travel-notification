import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {TravelItinerary} from "../model/travel-itinerary.model";
import {RequestOptions} from '@angular/http';

@Injectable()
export class TravelService{

    private baseUrl = `http://localhost:8000/api/travelnotification/itinerary`;

    constructor( private http: HttpClient) { }

    find(partnerBid: number): Observable<TravelItinerary> {
        return this.http.get<TravelItinerary>(`${this.baseUrl}/${partnerBid}`)
    }

    list() {
        return this.http.get<TravelItinerary[]>(this.baseUrl)
    }

    create(travelItinerary: TravelItinerary) {       

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };

        let body = {
            cardAccountNumber: travelItinerary.cardAccountNumber,
            country: travelItinerary.country,
            departureDate: travelItinerary.departureDate,
            returnDate: travelItinerary.returnDate,
            partnerBid: travelItinerary.partnerBid,
            userId: travelItinerary.userId
        };

        console.log(JSON.stringify(body));
        
        return this.http.post(this.baseUrl, JSON.stringify(body), httpOptions);
                    
      
        // return null;
    }

    update(travelItinerary: TravelItinerary) {  
        return this.http.put<TravelItinerary>(`${this.baseUrl}`, travelItinerary);
    }

    findTravelCountry(country: string) {

        return this.http.get(`http://localhost/api/travelnotification/itinerary/${country}`);

    }

}