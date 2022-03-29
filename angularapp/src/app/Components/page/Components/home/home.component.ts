
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {


  inpObj = {
    fname : "",
    lname : "",
    address : "",
    email: "",
    age : "" 
  }

  inpObj1="";
  constructor() { 
  }
  ngOnInit(): void {
  }
  addResultObj(resobj : any){
    console.log(resobj);
    this.inpObj = {...resobj};
    console.log(this.inpObj);
  }
  

}