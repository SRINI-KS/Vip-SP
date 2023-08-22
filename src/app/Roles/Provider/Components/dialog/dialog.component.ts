import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from 'src/Model/file-handle.model';
import { AcceptModel } from './AcceptModel';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { RequestAcceptService } from './Service/request-accept.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthServiceService, private acceptService: RequestAcceptService) { }
  images!: FileHandle[];
  requestData!: any;
  requestId!: number;
  responsiveOptions!: any[];

  acceptRequest: AcceptModel = {
    customerId: '',
    providerId: '',

    serviceStartDate: null,
    serviceEndDate: null,
    customerConfirmation: '',
    paidStatus: '',
    acceptDate: null,
    status: ''
  }

  ngOnInit(): void {
    this.receiveData()
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }

  receiveData() {
    console.log(this.data.requestData)
    this.requestData = this.data.requestData
    this.images = this.data.requestData.images
  }

  accept() {
    this.setAcceptDetails()
    console.log(this.acceptRequest)
    // const requestAcceptFormData = this.prepareFormData(this.acceptRequest);
    this.acceptService.requestAccept(this.requestId,this.acceptRequest).subscribe(
      (Response) => {
        console.log(Response)
      }
    )

  }

  // prepareFormData(request: AcceptModel): FormData {
  //   const formData = new FormData();
  //   formData.append('requestId', this.requestId.toString())
  //   formData.append('requestAccept',JSON.stringify(request)    );


  //   return formData;
  // }


  setAcceptDetails() {
    this.acceptRequest.customerId = this.requestData.userId
    this.acceptRequest.providerId = String(this.authService.getUserId())
    this.acceptRequest.acceptDate = new Date()
    this.requestId = this.requestData.requestId
    console.log(this.requestData.requestId)
    this.acceptRequest.status = 'Accepted'
  }
}
