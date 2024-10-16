import { Component } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { CommonModule } from '@angular/common';
import { MasterComponent } from '../master/master.component';

@Component({
  selector: 'app-master1',
  standalone: true,
  imports: [MasterComponent,
    DemoComponent,
    CommonModule
  ],
  templateUrl: './master1.component.html',
  styleUrl: './master1.component.css'
})
export class Master1Component {
  value:string='';
  change(data:string) {
this.value=data
  }
}
