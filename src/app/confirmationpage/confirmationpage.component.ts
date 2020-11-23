import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from "../datastorage.service";

@Component({
  selector: 'app-confirmationpage',
  templateUrl: './confirmationpage.component.html',
  styleUrls: ['./confirmationpage.component.css']
})
export class ConfirmationpageComponent implements OnInit {

  sub: any
   confirmationResults: {}
  settlementAmount: number

  public constructor(private route: ActivatedRoute, public data: Data) { 
    console.log((this.data.storage));
    this.confirmationResults = this.data.storage
  }

  ngOnInit(): void {


this.settlementAmount = parseFloat(this.data.storage.ask) * parseFloat(this.data.storage.orderUnits)
  }

}
