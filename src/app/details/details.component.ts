import { Component, OnInit } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayTurned = false;
  increment:number = 0
  numArray = [];
  colorSet = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayChange(){
    this.displayTurned === false ? this.displayTurned = true : this.displayTurned = false
    this.increment++;   
    console.log(this.increment);
    this.numArray.push(this.increment);
  }

  statusColor(){
    if(this.increment >= 5){
      this.colorSet = true;
      return 'blue';
    }

  }


}
