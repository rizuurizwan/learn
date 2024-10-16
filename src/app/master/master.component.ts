import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent implements OnInit{
  datalist:any;
  http =inject(HttpClient)
spinner:boolean =true;
  // constructor(private http:HttpClient){}
  ngOnInit(): void {
    // this.get()
  }

// get() {
//   this.http.get('https://reqres.in/api/users?page=1').subscribe((res:any)=>{
//     this.datalist = res.data;
// this.spinner = false;
//     // console.log(this.datalist)
//   })
//   }
}
