import { BreakpointObserver } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS, StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { RequestModel } from 'src/Model/RequestModel/requestModel';
import { AcceptStatusService } from './Services/accept-status.service';
import { ResolveEnd } from '@angular/router';
interface customerConfirmation {
  status: string;
}
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    }
  ]
})
export class OrderDetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private acceptService: AcceptStatusService) { }
  // status: customerConfirmation = {
  //   status: 'Confirmed'
  // };
  status: string = 'Confirmed'
  requestId: any;
  ngOnInit(): void {
    console.log(this.data)
    console.log(this.data.requestData.acceptDetails[0].status)
    this.requestId = this.data.requestData.requestId
    this.changeStepperState()
  }
  // steps: String[] = ["Request Status", "Accept Provider", "Provider on the way", "Work Completed"]
  // currentState = 0;
  // changeState() {
  //   if (this.currentState != this.steps.length) {
  //     if ((this.data.requestData.acceptDetails[0].status).toUpperCase() == 'ACCEPTED') {
  //       this.currentState = 1
  //     }
  //     if ((this.data.requestData.acceptDetails[0].customerConfirmation).toUpperCase() == 'ACCEPTED') {
  //       this.currentState = 2
  //     }
  //   }
  // }
  step=3
  step1Complete = false;
  step2Complete = false;
  step3Complete = false;
  step4Complete = false;
  step5Complete = false;
  confirmProvider() {
    this.acceptService.updateCustomerDetails(this.requestId, this.status).subscribe(
      (Response) => {
        console.log(Response)
        this.ngOnInit()
      },
      (Error) => {
        this.ngOnInit()
      }
    )
  }




  changeStepperState() {
    if (this.data.requestData.acceptDetails[0].customerConfirmation == 'Confirmed') {
      this.step1Complete = true

    }
  }
}
