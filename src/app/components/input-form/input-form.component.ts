import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {



  inquiryMotivation: string = '';

  contactFrom: string = '';

  vehicleData: boolean = false

  deliveryDelay: boolean = false;

  salesTypes = ["Sales", "After Sales"]
  typeOfSale: string = ''

  ratSelectionBox: boolean = false;

  personTitle = ["Sig.", "Sig.ra"];
  personChosenTitle : string = 'Per favore selezionare';

  errorMessage: [] = [];
  mailMessage: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  setPersonTitle(title: string){
    this.personChosenTitle = title;
  }

  submitInquiry(){
    //todo fare i controlli che i campi obbligatori ci siano tutti


    //creare oggetto mail da mandare be
  }

  mailMessageChange(){
    console.log(this.mailMessage);
  }

}
