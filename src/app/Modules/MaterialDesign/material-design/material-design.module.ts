import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

const MaterialDesign=[MatButtonModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialDesign
  ],
  exports:[MaterialDesign]
})
export class MaterialDesignModule { }
