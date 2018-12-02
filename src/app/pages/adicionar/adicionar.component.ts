import { Component, OnInit, Input } from '@angular/core';
import { TravelItinerary } from '../../model/travel-itinerary.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TravelService } from '../../services/travel.service';
import { MensagensService } from '../../services/mensagens.service';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  
  public travel: TravelItinerary;

  public formTravel: FormGroup;
  @Input() card: string;

  constructor(private travelService: TravelService,
             private formBuilder: FormBuilder,
             private mensagensService: MensagensService,
             private errorHandlerService: ErrorHandlerService) {

       

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
}


