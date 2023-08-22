import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RequestModel } from 'src/Model/RequestModel/requestModel';
import { UserRequestService } from '../../Service/UserRequest/user-request.service';
import { ImageService } from 'src/app/Services/Image/image.service';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SpinnerComponent } from 'src/app/Components/spinner/spinner.component';
@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent implements OnInit {
  @ViewChild('spinner', { read: ViewContainerRef }) spinner!: ViewContainerRef;
  userRequest: RequestModel[] = []
  constructor(private userService: UserRequestService, private imageService: ImageService, public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getAllRequest()
  }
  getAllRequest() {
    this.userService.requestAll().pipe(
      map((x: any, i) => x.map((request: RequestModel) => this.imageService.createImages(request)))
    ).subscribe((Response: any) => {
      this.userRequest = Response
    });
  }
  showDetails(request: RequestModel) {
    this.dialog.open(DialogComponent, {
      height: '90%',
      width: '80%',
      data: {
        requestData: request,
      },
    });
  }
  createComponent() {
    const spinnerRef = this.spinner.createComponent<SpinnerComponent>;
  }             
}
