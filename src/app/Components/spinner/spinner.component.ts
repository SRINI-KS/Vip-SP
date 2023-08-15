import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnChanges {
  
  @Input() isSpinner!: Boolean ;



  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
    this.isSpinner=false
    }, 2000);
  
    console.log("changes")
  }
 
 
  ngOnInit(): void {
  }

}
