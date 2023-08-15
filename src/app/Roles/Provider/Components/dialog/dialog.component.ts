import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from 'src/Model/file-handle.model';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  images!: FileHandle[];
  requestData!: any;
  // images!: any[];
  responsiveOptions!: any[];
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
}
