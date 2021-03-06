import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { TravelItinerary } from '../../model/travel-itinerary.model';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { ResponseApi } from '../../model/response-api.model';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  public travelList : Array<any>;

 
    public columns = [];
  constructor(private travelService: TravelService,
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {

    this.columns = [
      { field: "returnDate", header: "Data de Retorno" },
      { field: "departureDate", header: "Data de Saída" },
      { field: "country", header: "País" },
      { field: "cardAccountNumber", header: "Cartão" }
    ];
    this.list();
  }

  list(){
    this.travelService.list().subscribe(
      response => {
        console.log(response);
        this.travelList = response;
      },
      err => {
        this.errorHandlerService.handleResponseError(err)
      }
    );
    
  }

}
