import { Component, OnInit } from '@angular/core';
import { RequestModel } from 'src/Model/RequestModel/requestModel';
import { UserRequestService } from '../../Service/UserRequest/user-request.service';
import { ImageService } from 'src/app/Services/Image/image.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {

  userRequest: RequestModel[] = []


  constructor(private userService: UserRequestService, private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getAllRequest()
  }


  getAllRequest() {
    // this.userService.requestAll().subscribe(
    //   (Response: any) => {
    //     this.userRequest = Response
    //   }
    // )
    this.userService.requestAll().pipe(
      map((x:any,i)=>x.map((request:RequestModel) => this.imageService.createImages(request)))
    ).subscribe((Response: any) => {
this.userRequest=Response
      console.log(Response[0].images[0].url);

    });
  }



}
