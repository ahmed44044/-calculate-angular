import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  res='';
  getAction(item:any){
    this.res += item
    // console.log(item)
  }
  equal(){
    this.res = eval(this.res)
  }
  reset(){
    this.res=''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
