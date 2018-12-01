import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {TravelItinerary} from "../model/travel-itinerary.model";

@Injectable()
export class TravelService{

    private baseUrl = ``;

    constructor( private http: HttpClient) { }

    find(partnerBid: number): Observable<TravelItinerary> {
        return this.http.get<TravelItinerary>(`${this.baseUrl}/${partnerBid}`)
    }

    list(userId: string): Observable<TravelItinerary[]> {
        return this.http.get<TravelItinerary[]>(this.baseUrl)
    }

    create(travelItinerary: TravelItinerary) {
        return this.http.post<TravelItinerary>(this.baseUrl, travelItinerary)
    }

    update(travelItinerary: TravelItinerary) {  
        return this.http.put<TravelItinerary>(`${this.baseUrl}`, travelItinerary)
    }

}