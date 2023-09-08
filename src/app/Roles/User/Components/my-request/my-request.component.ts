import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../../../../../Model/RequestModel/requestModel';
import { MyRequestService } from './Service/my-request.service';
import { FileHandle } from 'src/Model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/Services/Image/image.service';
import {map}from 'rxjs'
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../order-details/order-details.component';
@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css'],
})
export class MyRequestComponent implements OnInit {
  allRequest: RequestModel[]= [];

  constructor(
    private requestService: MyRequestService,
    private imageService:ImageService,
    public dialog: MatDialog
   
  ) {}

  ngOnInit(): void {
    this.getAllRequest();
  }
 

  getAllRequest() {

    this.requestService.requestAll().pipe(
      map((x:any,i)=>x.map((request:RequestModel) => this.imageService.createImages(request)))
    ).subscribe((Response: any) => {
this.allRequest=Response
      console.log(this.allRequest);

    });
  }
  getImage(){
    console.log(this.allRequest)
  }

  showOrderDetails(request: RequestModel) {
    this.dialog.open(OrderDetailsComponent, {
      height: '70%',
      width: '60%',
      data: {
        requestData: request,
      },
    });
  }
}
