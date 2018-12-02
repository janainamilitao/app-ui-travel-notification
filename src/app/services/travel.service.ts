import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {TravelItinerary} from "../model/travel-itinerary.model";
import { stringify } from "@angular/core/src/render3/util";

@Injectable()
export class TravelService{

    private baseUrl = `http://192.168.1.42/conductorApi/public/api/travelnotification/itinerary`;

    constructor( private http: HttpClient) { }

    find(partnerBid: number): Observable<TravelItinerary> {
        return this.http.get<TravelItinerary>(`${this.baseUrl}/${partnerBid}`)
    }

    list(userId: string): Observable<TravelItinerary[]> {
        return this.http.get<TravelItinerary[]>(this.baseUrl)
    }

    create(travelItinerary: TravelItinerary) {
        console.log(travelItinerary)
        
        return this.http.post<TravelItinerary>(this.baseUrl, JSON.stringify([travelItinerary.returnDate, 
                                                                    travelItinerary.departureDate,
                                                                    travelItinerary.destinations.country,
                                                                  travelItinerary.primaryAccountNumbers.cardAccountNumber,
                                                                travelItinerary.userId,
                                                            travelItinerary.partnerBid  ] )  );
         
      
        // return null;
    }

    update(travelItinerary: TravelItinerary) {  
        return this.http.put<TravelItinerary>(`${this.baseUrl}`, travelItinerary)
    }

}