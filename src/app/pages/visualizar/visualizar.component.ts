import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../services/travel.service';
import { TravelItinerary } from '../../model/travel-itinerary.model';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  public travelList : Array<TravelItinerary>;

 
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
        this.travelList = response;
      },
      err => {
        this.errorHandlerService.handleResponseError(err)
      }
    );
    
  }

}
