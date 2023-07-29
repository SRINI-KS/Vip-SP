import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddrequestService } from './Services/addrequest.service';
import { FileHandle } from 'src/Model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { RequestModel } from '../../../../../Model/RequestModel/requestModel';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent implements OnInit {
  showFields = false;
  itemsPerSlide = 3;

  // request:FormGroup = this.formBuilder.group({
  //   basicInfo: this.formBuilder.group({
  //     requestTitle: [''],
  //     category: [''],
  //     subCategory: [''],
  //     requestDiscription: [''],
  //   }),

  //   pay: this.formBuilder.group({
  //     fixedAmount: [''],
  //     minAmount: [''],
  //     maxAmount: [''],
  //     payType:[''],
  //     startDate:[''],
  //     endDate:['']

  //   }),
  //   address: this.formBuilder.group({
  //     currentAddress: [''],
  //     country: [''],
  //     city: [''],
  //     state: [''],
  //     pinCode: [''],
  //   }),
  // });
  // request:FormGroup = this.formBuilder.group({

  //     requestTitle: ['',Validators.required],
  //     category: ['',Validators.required],
  //     subCategory: ['',Validators.required],
  //     requestDiscription: ['',Validators.required],

  //     fixedAmount: [''],
  //     minAmount: [''],
  //     maxAmount: [''],
  //     payType:['',Validators.required],
  //     startDate:['',Validators.required],
  //     endDate:['',Validators.required],

  //     currentAddress: ['',Validators.required],
  //     country: ['',Validators.required],
  //     city: ['',Validators.required],
  //     state: ['',Validators.required],
  //     pinCode: ['',Validators.required],

  //     images:new FormArray([

  //     ])
  // });
  request: RequestModel = {
    email: '',
    requestTitle: '',
    category: '',
    subCategory: '',
    requestDiscription: '',
    fixedAmount: null,
    minAmount: null,
    maxAmount: null,
    payType: '',
    startDate: '',
    endDate: '',
    currentAddress: '',
    country: '',
    city: '',
    state: '',
    pinCode: null,
    images: [],
  };

  sub(val: string) {
    let subCat: any = this.requestService.getSubCategory();

    this.subCategoryOption = subCat[val];
  }
  constructor(
    private formBuilder: FormBuilder,
    private requestService: AddrequestService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private authService: AuthServiceService
  ) { }
  ngOnInit(): void {
    const email = this.authService.getEmail()
    this.request.email = String(email)
  }

  categoryOption: string[] = this.requestService.category;
  subCategoryOption!: string[];

  register() {
    const data = this.prepareFormData(this.request)
    this.requestService.request(data).subscribe((Response) => {

      console.log(Response);
      this.router.navigate(['user/myrequest'])

    });
  }
  prepareFormData(request: RequestModel): FormData {
    const formData = new FormData();
    formData.append('request',
      new Blob([JSON.stringify(request)], { type: 'application/json' })
    );
    for (var i = 0; i < request.images.length; i++) {
      formData.append('image',
        request.images[i].file,
        request.images[i].file.name)
    }
    return formData;
  }
  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];

      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.request.images.push(fileHandle);
    }
  }

  fileDropped(fileHandle: any) {
    this.request.images.push(fileHandle)
  }
  removeImage(i: number) {
    this.request.images.splice(i, 1)
  }
  get() {
    this.requestService.get().subscribe(
      (Response) => {
        console.log(Response)
      }
    )
  }
}
