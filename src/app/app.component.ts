import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Fruit } from './fruit';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DemoComponent,
    FormsModule,
    CommonModule,
    MasterComponent,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  datalist: any;

  // constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.get();
  }

  get() {
    // this.http
    //   .get('https://reqres.in/api/users?page=2')
    //   .subscribe((res: any) => {
    //     this.datalist = res.data;
    //     // console.log(this.datalist)
    //   });
  }

  title = 'learn';
  obj = {
    name: 'rizwan',
    id: 1,
    degree: 'bca,mca',
  };
  value:string='';
  change(data:string) {
this.value=data
  }
}
