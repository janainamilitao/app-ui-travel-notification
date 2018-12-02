import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TRAVEL_API, GEO_CODE_API } from './travel.api';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  public findLocation(lat: number, lng: number, local: string) {
    if(local) {
      return this.http.get(`${GEO_CODE_API}searchtext=+${local}`);
    } else {
      return this.http.get(`${TRAVEL_API}&mode=retrieveAreas&prox=${lat},${lng},250`);
    }
  }


}
