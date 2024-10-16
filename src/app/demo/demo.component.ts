import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonServiceService } from '../common.service.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{
  datalist:any;
  http =inject(HttpClient)
spinner:boolean =true;
  constructor(private _service : CommonServiceService){}
  ngOnInit(): void {
     this.get()
  }

get() {
  debugger
  this._service.getList().subscribe((res:any)=>{
    this.datalist = res;
    console.log(this.datalist)
    this.spinner=false
    // console.log(this.datalist)
  });
  }


  title = 'learn';
  obj={
    name:'rizwan',
    id:1,
    degree:'bca,mca'
  }
}
