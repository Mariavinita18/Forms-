import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class leftComponent implements OnInit {
  
  inpObj = {
    fname : "",
    lname : "",
    address : "",
    email : "",
    age : ""
  }
  
  constructor() {
 
  }
  
  ngOnInit(): void {  }
  
  @Output() resObj = new EventEmitter<any>();
  showResult(){
    this.resObj.emit(this.inpObj);
  }

}