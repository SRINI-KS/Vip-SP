import {
  Component,
} from '@angular/core';
import {
  FormBuilder,FormGroup, Validators
} from '@angular/forms';
import { AddrequestService } from './Services/addrequest.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css'],
})
export class AddRequestComponent {
  showFields = false;

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
  request:FormGroup = this.formBuilder.group({
   
      requestTitle: ['',Validators.required],
      category: ['',Validators.required],
      subCategory: ['',Validators.required],
      requestDiscription: ['',Validators.required],
   
      fixedAmount: [''],
      minAmount: [''],
      maxAmount: [''],
      payType:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],

    
      currentAddress: ['',Validators.required],
      country: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      pinCode: ['',Validators.required],
    
  });

  sub(val: string) {
    let subCat: any = this.requestService.getSubCategory();

    this.subCategoryOption = subCat[val];
  }
  constructor(
    private formBuilder: FormBuilder,
    private requestService: AddrequestService
  ) {}

  categoryOption: string[] = this.requestService.category;
  subCategoryOption!: string[];

  register(){
    console.log(this.request.value)
  }
}
