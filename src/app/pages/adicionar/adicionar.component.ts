import { Component, OnInit, Input } from '@angular/core';
import { TravelItinerary } from '../../model/travel-itinerary.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TravelService } from '../../services/travel.service';
import { MensagensService } from '../../services/mensagens.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { MouseEvent } from '@agm/core';
import { GeolocationService } from '../../services/geolocation.service';
import { ResponseApi } from '../../model/response-api.model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  
  public travel: TravelItinerary;

  public formTravel: FormGroup;
  @Input() card: string;

  lat: number = -23.533773;
  lng: number = -46.625290;
  local: string = "BRA";
  data: string = "21/01/2018";

  localResponse: any;

  constructor(private travelService: TravelService,
             private formBuilder: FormBuilder,
             private mensagensService: MensagensService,
             private errorHandlerService: ErrorHandlerService,
             private geolocationService: GeolocationService) {

       

      this.travel = new TravelItinerary("", "","", "", "", "");

      this.formTravel = this.formBuilder.group({
        partnerBid: [null],
        userId: "",
        cardAccountNumber: [null, Validators.compose([Validators.required])],
        country: [null, Validators.compose([Validators.required])],
        departureDate: [null, Validators.compose([Validators.required])],
        returnDate: [null, Validators.compose([Validators.required])],
        lastUpdatedBy : [null],
        lastUpdateTime : [null]
      });
            
   }


 
  ngOnInit() { 
   
  }

  save() {
       if (this.travel.partnerBid) {
     // this.update();
    } else {
      this.create();
    }
  }
  
  create(){
    this.applyFormValues();

    this.travelService.create(this.travel).subscribe(
      (response) => {    
       
        this.mensagensService.addSuccess("Sucesso", "Aviso de viagem cadastrado com sucesso!"); 
             
      },
      (err) => {
        console.log(err);
      }
    )
      // errorResponse =>  this.errorHandlerService.handleResponseError(errorResponse));
  }

  private applyFormValues() {
    
    if(this.formTravel.get('departureDate').value){ this.travel.departureDate = this.formTravel.get('departureDate').value}
    if(this.formTravel.get('returnDate').value){ this.travel.returnDate = this.formTravel.get('returnDate').value}
    if(this.formTravel.get('cardAccountNumber').value){ this.travel.cardAccountNumber = this.formTravel.get('cardAccountNumber').value}
    if(this.formTravel.get('country').value){ this.travel.country = this.formTravel.get('country').value}
    if(this.formTravel.get('partnerBid').value){ this.travel.partnerBid = this.formTravel.get('partnerBid').value}
  
  }

  public onChoseLocation($event: MouseEvent) {

    this.lat = $event.coords.lat;

    this.lng = $event.coords.lng;

    this.geolocationService.findLocation($event.coords.lat, $event.coords.lng, this.local)

  }

 

  public markerDragEnd($event: MouseEvent) {

    this.lat = $event.coords.lat;

    this.lng = $event.coords.lng;

    this.geolocationService.findLocation($event.coords.lat, $event.coords.lng, this.local).subscribe((responseApi: ResponseApi) => {

      if(responseApi.Response) {

        responseApi.Response['View'][0]['Result'][0]['Location']['Address']['Country']

      } else {

        responseApi.errors.push("Not Data");

      }

    }, err => {

      console.log(err['error']['errors'][0]);

    })

  }

 

  public randomCountry() {

    this.geolocationService.findLocation(null, null, this.local).subscribe((responseApi: ResponseApi) => {

      if(responseApi.Response) {

        console.log("localResponse");

        this.localResponse = responseApi.Response['View'][0]['Result'][0]['Location']['Address']['Country']

        console.log(this.localResponse)

 

        this.travelService.findTravelCountry(this.localResponse).subscribe((responseApi: ResponseApi) => {

          console.log("ResponseTravel");

          console.log(responseApi.data);

        })

       

      } else {

        responseApi.errors.push("Not Data");

      }

    }, err => {

      console.log(err['error']['errors'][0]);

    })

  }
}


