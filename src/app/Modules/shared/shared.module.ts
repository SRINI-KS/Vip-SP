import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { SpinnerComponent } from 'src/app/Components/spinner/spinner.component';
import { MaterialDesignModule } from '../MaterialDesign/material-design/material-design.module';



@NgModule({
  declarations: [
    FooterComponent,
    SpinnerComponent,


  ],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports:[FooterComponent,
    SpinnerComponent,
  ]
})
export class SharedModule { }
