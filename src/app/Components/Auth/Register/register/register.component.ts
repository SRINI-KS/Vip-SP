import { BreakpointObserver } from '@angular/cdk/layout';
import {
  STEPPER_GLOBAL_OPTIONS,
  StepperOrientation,
} from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable, map } from 'rxjs';
import { RegisterModel } from './RegisterModel';
import { RegisterService } from './Service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class RegisterComponent implements OnInit {
  //  password visible
  hide = true;
  showProf = false;

  //  get professionalData(){
  //     return this.registerData.controls["provider"]  as FormArray
  //  }

  // registerData = this._formBuilder.group({
  //   profile:this._formBuilder.group({
  //     firstName:["",Validators.required],
  //     lastName:["",Validators.required],
  //     dob:["",Validators.required],
  //     gender:["",Validators.required]
  //   }),
  //   credentials:this._formBuilder.group({
  //     emailId:["",Validators.required],
  //     password:["",Validators.required],
  //     phoneNumber:["",Validators.required]
  //   }),
  //   address:this._formBuilder.group({
  //     currentAddress:["",Validators.required],
  //     country:["",Validators.required],
  //     city:["",Validators.required],
  //     state:["",Validators.required],
  //     pinCode:["",Validators.required],
  //     liveLocation:["",Validators.required]
  //   }),
  //   category:this._formBuilder.group({
  //     role:["",Validators.required],
  //         professional:["",Validators.required]
  //   }),
  // });
  registerData = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],

    email: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: ['', Validators.required],

    currentAddress: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pinCode: ['', Validators.required],
    liveLocation: [''],

    role: ['', Validators.required],
    professional: [''],
  });

  data(value: any) {
    if (value == 'PROVIDER') {
      this.showProf = true;
    } else this.showProf = false;
  }

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private regService:RegisterService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  ngOnInit(): void {
  }

  // addInputPro(){
  //   let details=this._formBuilder.group({professional:[''],professional2:['']})
  //   this.professionalData.push(details)
  // }

  register() {
    if(this.registerData.valid){
      this.regService.registerUser(this.registerData.value).subscribe(
        (Response)=>{
          console.log(Response)
        }
      )
    }
    
  }

  

  
}
