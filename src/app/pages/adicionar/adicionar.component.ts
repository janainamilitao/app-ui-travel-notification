import { Component, OnInit, Input } from '@angular/core';
import { TravelItinerary } from '../../model/travel-itinerary.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TravelService } from '../../services/travel.service';
import { PrimaryAccountNumbers } from '../../model/primary-account-numbers.model';
import { Destinations } from '../../model/destinations.model';
import { MensagensService } from '../../services/mensagens.service';
import { ErrorHandlerService } from '../../services/error-handler.service';

export class Country{
  constructor(
      public name: string,
      public code: string
  ){}
}

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  @Input() countrys  = new Array<Country>(); 

  @Input() selectCountrys = new Array<Country>(); 
  

  public travel: TravelItinerary;
  public primaryAccountNumbers:  Array<PrimaryAccountNumbers>
  public destinations: Array<Destinations>
  public formTravel: FormGroup;

  constructor(private travelService: TravelService,
             private formBuilder: FormBuilder,
             private mensagensService: MensagensService,
             private errorHandlerService: ErrorHandlerService) {

       

      this.travel = new TravelItinerary("", "",this.primaryAccountNumbers, this.destinations, "", "", "", "" )

      this.formTravel = this.formBuilder.group({
        partnerBid: [null],
        userId: [null],
        primaryAccountNumbers: [null, Validators.compose([Validators.required])],
        destinations: [null, Validators.compose([Validators.required])],
        departureDate: [null, Validators.compose([Validators.required])],
        returnDate: [null, Validators.compose([Validators.required])],
        lastUpdatedBy : [null],
        lastUpdateTime : [null]
      });
            
   }


 
  ngOnInit() {   
    let brasil = new Country("Brasil", "76");
    let canada = new Country("Brasil", "124");
    let eua = new Country("Estados Unidos", "840");

    this.countrys.includes(brasil);
    this.countrys.includes(canada);
    this.countrys.includes(eua);
  }

  salvar() {
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
    if(this.formTravel.get('departureDate').value){ this.travel.departureDate = this.formTravel.get('returnDate').value}
    if(this.formTravel.get('primaryAccountNumbers').value){ this.travel.departureDate = this.formTravel.get('returnDate').value}
    if(this.formTravel.get('destinations').value){ this.travel.departureDate = this.formTravel.get('returnDate').value}
    
  }
}


