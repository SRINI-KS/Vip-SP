import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../add-request/requestModel';
import { MyRequestService } from './Service/my-request.service';
import { FileHandle } from 'src/Model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/Services/Image/image.service';
import {map}from 'rxjs'
@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css'],
})
export class MyRequestComponent implements OnInit {
  allRequest: RequestModel[]= [];

  constructor(
    private requestService: MyRequestService,
    private imageService:ImageService
   
  ) {}

  ngOnInit(): void {
    this.getAllRequest();
  }
 

  getAllRequest() {

    this.requestService.requestAll().pipe(
      map((x:any,i)=>x.map((request:RequestModel) => this.imageService.createImages(request)))
    ).subscribe((Response: any) => {
this.allRequest=Response
      console.log(Response[0].images[0].url);

    });
  }
  getImage(){
    console.log(this.allRequest)
  }
}
