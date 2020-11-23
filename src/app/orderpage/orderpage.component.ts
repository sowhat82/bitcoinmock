import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {httpservice} from '../httpservice.service'
import {Data} from '../datastorage.service'


@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  orderForm: FormGroup
  result = {bid: 0, ask: 0}
  settlementAmount = 0

  constructor(private fb: FormBuilder, private httpservice: httpservice, private router: Router, private data: Data) { }

  async ngOnInit(): Promise<void> {

    this.orderForm = this.fb.group({
    contactNumber: this.fb.control(''),
    name: this.fb.control(''),
    gender: this.fb.control(''),
    dob: this.fb.control('', [Validators.required]),
    orderDate: this.fb.control(''),
    orderType: this.fb.control('', Validators.required),
    orderUnits: this.fb.control('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    paynowURL: this.fb.control(''),
    bitcoinAddress: this.fb.control(''),
    })

    this.result = await(this.httpservice.getPrice());
  //  const bid = this.result.bid;
    console.info(this.result);
    this.onSelectionChange(this.orderForm.value.orderType)
  }

  processForm() {
    this.data.storage  = Object.assign(this.orderForm.value, this.result)
  
    console.info(this.data.storage)
    this.router.navigate(['/confirmationpage'],);


      }
  
    onSelectionChange(value) {
      console.log(value);
      if (value === 'Buy') {
        this.orderForm.get('paynowURL').disable();
        this.orderForm.get('bitcoinAddress').enable();
      } else {
        this.orderForm.get('paynowURL').enable();
        this.orderForm.get('bitcoinAddress').disable();
      }
    }
  
  updatesettlementamount(){
    this.settlementAmount = this.orderForm.value.orderUnits * this.result.ask
  }

  resetForm(){
    this.orderForm.reset()
  }

}
