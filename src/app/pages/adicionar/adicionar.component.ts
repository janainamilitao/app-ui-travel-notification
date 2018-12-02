import { Component, OnInit, Input } from '@angular/core';
import { TravelItinerary } from '../../model/travel-itinerary.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TravelService } from '../../services/travel.service';
import { PrimaryAccountNumbers } from '../../model/primary-account-numbers.model';
import { Destinations } from '../../model/destinations.model';
import { MensagensService } from '../../services/mensagens.service';
import { ErrorHandlerService } from '../../services/error-handler.service';



@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  public destination: Destinations;
  
  public travel: TravelItinerary;
  public primaryAccountNumbers:  PrimaryAccountNumbers;
  public countrys: Array<Destinations>;
  public formTravel: FormGroup;
  @Input() card: string;

  constructor(private travelService: TravelService,
             private formBuilder: FormBuilder,
             private mensagensService: MensagensService,
             private errorHandlerService: ErrorHandlerService) {

       

      this.travel = new TravelItinerary("", "",new PrimaryAccountNumbers(""), new Destinations("", ""), "", "", "", "" )

      this.formTravel = this.formBuilder.group({
        partnerBid: [null],
        userId: "",
        cardAccountNumber: [null, Validators.compose([Validators.required])],
        destinations: [null, Validators.compose([Validators.required])],
        departureDate: [null, Validators.compose([Validators.required])],
        returnDate: [null, Validators.compose([Validators.required])],
        lastUpdatedBy : [null],
        lastUpdateTime : [null]
      });
            
   }


 
  ngOnInit() { 
    this.countrys = Array<Destinations>();
    this.countrys.push(new Destinations("76", "Brasil"));
    this.countrys.push(new Destinations("124", "Canadá"))
    this.countrys.push(new Destinations("840", "Estados Unidos"))
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
      (success) => {    
       
        this.mensagensService.addSuccess("Sucesso", "Aviso de viagem cadastrado com sucesso!");        
      },
      errorResponse =>  this.errorHandlerService.handleResponseError(errorResponse));
  }

  private applyFormValues() {
    
    if(this.formTravel.get('departureDate').value){ this.travel.departureDate = this.formTravel.get('departureDate').value}
    if(this.formTravel.get('returnDate').value){ this.travel.returnDate = this.formTravel.get('returnDate').value}
    if(this.formTravel.get('cardAccountNumber').value){ this.travel.primaryAccountNumbers.cardAccountNumber = this.formTravel.get('cardAccountNumber').value}
    if(this.formTravel.get('destinations').value){ this.travel.destinations = this.formTravel.get('destinations').value}
    if(this.formTravel.get('partnerBid').value){ this.travel.partnerBid = this.formTravel.get('partnerBid').value}
  
  }
}


